
module.exports = (app) => {
    const indexControler = require('./../Controler/indexControler.js')

    app.route('/add-directory').post(indexControler.addDirectory)

    app.route('/all').get(indexControler.all)
    app.route('/send').post(indexControler.send)
    app.route('/update').post(indexControler.update)
    app.route('/schools').get(indexControler.refSchools)
    app.route('/employees').get(indexControler.refEmployees)
    app.route('/events').get(indexControler.refEvents)
    app.route('/download').get(indexControler.download)


    app.route('/all-statement').get(indexControler.allStatement)
    app.route('/create-statement').post(indexControler.createStatement)
    app.route('/remove-statement').post(indexControler.removeStatement)
    app.route('/download-statement').get(indexControler.downloadStatement)

}