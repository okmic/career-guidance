
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
        const { school, fio, day, time, adress, fioDir, phone, email } = req.body
        if (school || fio || day || time || adress || fioDir || phone || email === undefined) {
            return response.error({ message: "error date" }, res)
        }
        db.send("INSERT INTO `data` (`id`, `school`, `fio`, `day`, `time`, `adress`, `fioDir`, `phone`, `email`) VALUES " + `(NULL, "${school}", "${fio}", "${day}", "${time}", "${adress}", "${fioDir}", "${phone}", "${email}")`)

        response.status('ok', res)
    }
    catch (e) {
        console.error(e)
        response.error(e, res)
    }
}

exports.download = async (req, res) => {

    const data = await db.all('SELECT * FROM `data`')

    const csvWriter = createCsvWriter({
        path: 'data/data.csv',
        header: [
            { id: 'id', title: "id" },
            { id: 'test', title: 'test' },
            { id: 'test', title: 'test' },
            { id: 'test', title: 'test' }
        ]
    })
    csvWriter.writeRecords(data).then(() => {
        console.log('file csv writed')

        let fileLocation = path.join('./data', 'data.csv');

        res.download(fileLocation)
    })

}
