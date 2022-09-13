const myDatabase = []

const getAll = () => myDatabase

const create = obj => {
    myDatabase.push(obj)
}

const update = (id, obj) => {
    const objId = myDatabase.findIndex(tmp => tmp.id == id)
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
    remove
}