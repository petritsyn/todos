import axios from "axios";

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type FieldErrorType = {
    error: string
    field: string
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: FieldErrorType[]
    data: D
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'api-key': '7d54e03a-c727-4a11-92e7-335f41a4e836'
    }
});

export const todolistsApi = {
    getTodolists() {
        return instance.get<TodolistType[]>('/todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>('/todo-lists', { title })
    },
    deleteTodolist(id: string) {
        return instance.delete<ResponseType>(`/todo-lists/${id}`)
    },
    updateTodolist(id: string, newTitle: string) {
        return instance.put<ResponseType>(`/todo-lists/${id}`, { title: newTitle })
    }
}