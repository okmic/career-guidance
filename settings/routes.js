
module.exports = (app) => {
    const indexControler = require('./../Controler/indexControler.js')

    app.route('/all').get(indexControler.all)
    app.route('/send').post(indexControler.send)
    app.route('/update').post(indexControler.update)
    app.route('/download').get(indexControler.download)

    app.route('/schools').get(indexControler.refSchools)
    app.route('/employees').get(indexControler.refEmployees)
    app.route('/events').get(indexControler.refEvents)

    app.route('/add-directory').post(indexControler.addDirectory)

}