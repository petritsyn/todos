import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type ActionsType = RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    filter?: FilterValuesType
}
type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    id: string
}
type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterValuesType
    id: string
}

export const todolistsReducer = (state: Array<TodolistType>, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return [...state.filter(td => td.id !== action.id)]
        case 'ADD-TODOLIST':
            return [...state, {id: v1(), title: action.title, filter: 'all'}]
        case 'CHANGE-TODOLIST-TITLE': {
            const stateCopy = [...state]
            const todolist = stateCopy.find(td => td.id === action.id)
            if (todolist) {
                if (action.title != null) {
                    todolist.title = action.title
                }
            }
            return stateCopy
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const stateCopy = [...state]
            const todolist = stateCopy.find(td => td.id === action.id)
            if (todolist) {
                if (action.filter != null) {
                    todolist.filter = action.filter
                }
            }
            return stateCopy
        }

        default:
            throw new Error('I don\'t understand this type')
    }
}

export const RemoveTodolistAC = (id: string): RemoveTodolistActionType => ({
    type: 'REMOVE-TODOLIST',
    id: id
})
export const AddTodolistAC = (title: string): AddTodolistActionType => ({
    type: 'ADD-TODOLIST',
    title: title
})
export const ChangeTodolistTitleAC = (id: string, newTitle: string): ChangeTodolistTitleActionType => ({
    type: 'CHANGE-TODOLIST-TITLE',
    title: newTitle,
    id: id
})
export const ChangeTodolistFilterAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType => ({
    type: 'CHANGE-TODOLIST-FILTER',
    id: id,
    filter: filter
})

