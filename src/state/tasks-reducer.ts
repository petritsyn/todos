import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

type removeTaskType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}
type addTaskType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}
type changeTaskStatusType = {
    type: 'CHANGE-TASK-STATUS'
    status: boolean
    todolistId: string
    taskId: string
}
type changeTaskTitleType = {
    type: 'CHANGE-TASK-TITLE'
    title: string
    todolistId: string
    taskId: string
}

type ActionsType = removeTaskType
    | addTaskType
    | changeTaskStatusType
    | changeTaskTitleType
    | AddTodolistActionType
    | RemoveTodolistActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const stateCopy = {...state}
            let tasksForTodolist = stateCopy[action.todolistId]
            stateCopy[action.todolistId] = tasksForTodolist.filter(t => t.id !== action.taskId)
            return stateCopy
        }
        case "ADD-TASK": {
            const stateCopy = {...state}
            let task = {id: v1(), title: action.title, isDone: false};
            stateCopy[action.todolistId] = [task, ...stateCopy[action.todolistId]];
            return stateCopy
        }
        case "CHANGE-TASK-STATUS": {
            const stateCopy = {...state}
            let task = stateCopy[action.todolistId].find(t => t.id === action.taskId)
            if (task) {
                task.isDone = action.status
            }
            return stateCopy
        }
        case "CHANGE-TASK-TITLE": {
            const stateCopy = {...state}
            let task = stateCopy[action.todolistId].find(t => t.id === action.taskId)
            if (task) {
                task.title = action.title
            }
            return stateCopy
        }
        case "ADD-TODOLIST": {
            const stateCopy = {...state}
            stateCopy[action.id] = []
            return stateCopy
        }
        case "REMOVE-TODOLIST": {
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        }

        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): removeTaskType => {
    return { type: 'REMOVE-TASK', taskId, todolistId}
}
export const addTaskAC = (title: string, todolistId: string): addTaskType => {
    return { type: 'ADD-TASK', title, todolistId}
}
export const changeTaskStatusAC = (taskId: string, status: boolean, todolistId: string): changeTaskStatusType => {
    return { type: 'CHANGE-TASK-STATUS', status, todolistId, taskId}
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): changeTaskTitleType => {
    return { type: 'CHANGE-TASK-TITLE', title, todolistId, taskId}
}