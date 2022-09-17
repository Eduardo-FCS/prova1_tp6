const myDatabase = []

const getAll = () => myDatabase

const getById = id => myDatabase.find(tmp => tmp.id == id)

const create = obj => {
    myDatabase.push(obj)
}

const update = (id, obj) => {
    const objId = myDatabase.findIndex(tmp => tmp.id == id)
    console.log(obj)
    myDatabase[objId] = obj
}

const remove = id => {
    const objId = myDatabase.findIndex(tmp => tmp.id == id)
    myDatabase.splice(objId, 1)
}

module.exports = {
    getAll,
    create,
    update,
    remove,
    getById
}