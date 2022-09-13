const service = require('../service/service')

const getAll = (req, res) => {
    res.status(200).send(service.getAll())
}

const create = (req, res) => {
    service.create(req.body)
    res.status(200).send('Criado com sucesso!')
}

const update = (req, res) => {
    service.update(req.params.id, req.body)
    res.status(200).send('Atualizado com sucesso!')
}

const remove = (req, res) => {
    service.remove(req.params.id)
    res.status(200).send('Deletado com sucesso!')
}

module.exports = {
    getAll,
    create,
    update,
    remove
}