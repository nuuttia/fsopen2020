import axios from 'axios'
const base = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(base)
}

const create = newObject => {
    return axios.post(base, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${base}/${id}`, newObject)
}

const del = (person) => {
    if (window.confirm('Delete ' + person.name + '?')){
        return axios.delete(`${base}/${person.id}`)
    }
}

export default {
    getAll,
    create,
    update,
    del
}