import {Add, Update, Delete} from "./todo.type"

export const add = (payload) => ({
    type:Add,
    payload:{
        ...payload,
      
    },
})
export const remove = (id) => ({type:Delete, payload:{id}})
export const update = (id) => ({type:Update, payload:{id}})