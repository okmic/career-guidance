
module.exports = (app) => {
    const indexControler = require('./../Controler/indexControler.js')

    app.route('/all').get(indexControler.all)
    app.route('/send').post(indexControler.send)
    app.route('/download').get(indexControler.download)
}