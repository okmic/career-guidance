
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

exports.send = (req, res) => {
    try {
        const { school, fio, day, time, adress, fioDir, phone, email, was } = req.body
        if ((school || fio || day || time || adress || fioDir || phone || email) === undefined) {
            
            return response.error({ message: "error date" }, res)
        } else {
            db.send("INSERT INTO `data` (`id`, `school`, `fio`, `day`, `time`, `adress`, `fioDir`, `phone`, `email`, `was`) VALUES " + `(NULL, "${school}", "${fio}", "${day}", "${time}", "${adress}", "${fioDir}", "${phone}", "${email}", "${was}")`)
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
            { id: 'phone', title: 'Телефон' },
            { id: 'email', title: 'Почта' },
            { id: 'was', title: 'Статус(0 - не посещали, 1 - посещали)' }
        ]
    })
    csvWriter.writeRecords(data).then(() => {
        console.log('csv writed')

        let fileLocation = path.join('./data', 'data.csv');

        res.download(fileLocation)
    })

}
