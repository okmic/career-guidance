
exports.status = (values, res) => {

    const data = {
        "status": 200,
        "values": values
    }
    res.json(data)
    res.end()
}

exports.error = (e, res) => res.status(500).send(e)
