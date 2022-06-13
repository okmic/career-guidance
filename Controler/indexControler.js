
const path = require('path')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const db = require('./../settings/db.js')
const response = require('./../settings/response.js')

exports.all = async (req, res) => {
    try {
        const data = await db.all('SELECT * FROM `data`')
        response.status(data, res)
    }
    catch (e) {
        console.error(e)
    }
}

exports.refSchools = async (req, res) => {
    try {
        const data = await db.all('SELECT * FROM `schools`')
        response.status(data, res)
    }
    catch (e) {
        response.error(e, res)
    }
}

exports.refEmployees = async (req, res) => {
    try {
        const data = await db.all('SELECT * FROM `employees`')
        response.status(data, res)
    }
    catch (e) {
        response.error(e, res)
    }
}

exports.refEvents = async (req, res) => {
    try {
        const data = await db.all('SELECT * FROM `events`')
        response.status(data, res)
    }
    catch (e) {
        response.error(e, res)
    }
}

exports.send = (req, res) => {
    try {
        const { school, fio, day, time, adress, fioDir,contacts, event, was } = req.body

        if ((school || fio || day || time || adress || fioDir || contacts) === undefined) {
            return response.error({ message: "error date" }, res)
        } else {
            db.send("INSERT INTO `data` (`id`, `school`, `fio`, `day`, `time`, `adress`, `fioDir`, `contacts`, `event`, `was`) VALUES " + `(NULL, "${school}", "${fio}", "${day}", "${time}", "${adress}", "${fioDir}", "${contacts}", "${event}", "${was}")`)
            //errors send data client
            response.status('ok', res)
        }
    }
    catch (e) {
        response.error(e, res)
    }
}
exports.update = (req, res) => {
    try {
        const { id, was } = req.body
        if (id === undefined) {
            return response.error({ message: "error date" }, res)
        } else {
            db.send(`UPDATE \`data\` SET \`was\`='${was}' WHERE \`id\` = '${id}'`)
            response.status('ok', res)
        }
    }
    catch (e) {
        response.error(e, res)
    }
}


exports.download = async (req, res) => {

    const data = await db.all('SELECT * FROM `data`')

    const csvWriter = createCsvWriter({
        path: 'data/data.csv',
        header: [
            { id: 'id', title: "id" },
            { id: 'school', title: 'Заведение' },
            { id: 'fio', title: 'ФИО' },
            { id: 'day', title: 'Дата' },
            { id: 'time', title: 'Время' },
            { id: 'adress', title: 'Адрес' },
            { id: 'fioDir', title: 'ФИО Директора' },
            { id: 'contacts', title: 'Контакты' },
            { id: 'event', title: 'Вид' },
            { id: 'was', title: 'Статус(0 - не посещали, 1 - посещали)' }
        ]
    })

     csvWriter.writeRecords(data).then(() => {
        console.log('csv writed')

        let fileLocation = path.join('./data', 'data.csv');

        res.download(fileLocation)
    }) 
}

exports.downloadStatement = async (req, res) => {

    const statements = await db.all('SELECT * FROM `statement`')

    const csvWriterStatement = createCsvWriter({
        path: 'data/data_statement.csv',
        header: [
            { id: 'id', title: "id" },
            { id: 'fio', title: 'ФИО Сотрудника' },
            { id: 'group', title: 'Группа' },
            { id: 'fio_student', title: 'ФИО Обучающегося' },
            { id: 'school', title: 'Заведение' },
            { id: 'day', title: 'Дата' },
            { id: 'contacts', title: 'Контакты' }
        ]
    })
    
    csvWriterStatement.writeRecords(statements).then(() => {
        console.log('csv statement writed')

        let fileLocation = path.join('./data', 'data_statement.csv');

        res.download(fileLocation)
    })
}

exports.addDirectory = (req, res) => {
    if (!req.body) response.error({ message: "error dir" }, res)

    const {value, type} = req.body

    switch (type) {
        case 'add-school':
            db.send("INSERT INTO `schools` (`id`, `school`) VALUES " + `(NULL, "${value}")`)
            response.status('ok', res)
            break
        case 'add-employe':
            db.send("INSERT INTO `employees` (`id`, `fio`) VALUES " + `(NULL, "${value}")`)
            response.status('ok', res)
            break
        case 'add-event':
            db.send("INSERT INTO `events` (`id`, `event`) VALUES " + `(NULL, "${value}")`)
            response.status('ok', res)
            break
        default: response.error({ message: "not order" }, res)
        
    }

}

exports.allStatement = async (req, res) => {
    try {
        const data = await db.all('SELECT * FROM `statement`')
        response.status(data, res)
    }
    catch (e) {
        console.error(e)
    }
}

exports.createStatement = async (req, res) => {
    try {
        const {fio, group, fio_student, school, contacts, day} = req.body
        
        db.send("INSERT INTO `statement` (`id`, `fio`, `group`, `fio_student`, `school`, `contacts`, `day`) VALUES " + `(NULL, "${fio}", "${group}", "${fio_student}", "${school}", "${contacts}", "${day}")`)
        response.status('ok', res)
    }
    catch (e) {
        response.error({ message: e }, res)
    }
}

exports.removeStatement = async (req, res) => {
    try {
        const {id} = req.body
        db.send("DELETE FROM `statement` WHERE `id` =" + id)
        response.status('ok', res) 
    }
    catch (e) {
        response.error({ message: e }, res)
    }
}