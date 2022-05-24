
const path = require('path')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const db = require('./../settings/db.js')
const response = require('./../settings/response.js')


exports.all = (req, res) => {
     db.query('SELECT * FROM `data`', (error, rows, fields) => {
        if (error) {
            console.log('error')
         } else {
            response.status(rows, res)
         }
    })
}

exports.send = (req, res) => {
    db.query("INSERT INTO `data` (`id`, `temperature`, `humidity`, `date`) VALUES " + `(NULL, ${req.body[0]}, ${req.body[1]}, CURRENT_TIMESTAMP)`, (error, rows, fields) => {
       if (error) {
           console.log('error')
        } else {
           response.status('ok', res)
           console.log('ok')
        }
   })
}

exports.download = async (req, res) => {

    await db.query('SELECT * FROM `data`', (error, rows, fields) => {
        if (error) {
            console.log('error')
         } else {
            const csvWriter = createCsvWriter({
                path: 'data/data_torf.csv',
                header: [
                    {id: 'id', title: "id"},
                    {id: 'test', title: 'test'},
                    {id: 'test', title: 'test'},
                    {id: 'test', title: 'test'}
                ]
            })
            csvWriter.writeRecords(rows) 
        .then(() => {
            console.log('file csv writed')

            let fileLocation = path.join('./data', 'data.csv');

            res.download(fileLocation)
            })
    }
    })
    
}
