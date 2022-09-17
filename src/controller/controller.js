const service = require('../service/service')

const secretKey = 'Un1v4$.2022'

const getAll = (req, res) => {
    res.status(200).send(service.getAll())
}

const getById = (req, res) => {
    const obj = service.getById(req.params.id)
    if (obj) {
        res.status(200).send(obj)
    } else {
        res.status(404).send('Movie not found')
    }
}

const create = (req, res) => {
    if (isValidBody(res, req.body)) {
        service.create(req.body)
        res.status(201).send('Created')
    } else {
        res.status(400).send('Invalid data supplied')
    }
}

const update = (req, res) => {
    const movie = service.getById(req.params.id)
    if (movie) {
        if (isValidBody(res, req.body)) {
            const id = req.params.id
            service.update(id, req.body)
            res.status(204).send('No Content')
        }
    } else {
        res.status(404).send('Movie not found')
    }
}

const remove = (req, res) => {
    const movie = service.getById(req.params.id)
    if (movie) {
        if (isValidBody(res, req.body)) {
            const id = req.params.id
            service.remove(id)
            res.status(204).send('No Content')
        }
    } else {
        res.status(404).send('Movie not found')
    }
}

const isValidBody = (res, movie) => {
    if (!movie.id) {
        res.status(400).send('Id is mandatory')
        return false
    } else if (!movie.title || movie.title.trim() === '') {
        res.status(400).send('Title is mandatory')
        return false
    } else if (!movie.release_year) {
        res.status(400).send('Release Year is mandatory')
        return false
    } else if (!movie.decription || movie.decription.trim() === '') {
        res.status(400).send('Decription is mandatory')
        return false
    } 
    return true
}

module.exports = {
    getAll,
    create,
    update,
    remove,
    getById
}