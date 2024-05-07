import React, { useEffect, useState } from 'react'
import { todolistsApi } from '../api/api'

export default {
  title: 'API',
}

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    todolistsApi.getTodolists().then(res => setState(res.data))
  }, [])
  return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    todolistsApi.createTodolist('New todolist').then(res => setState(res.data))
  }, [])
  return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    todolistsApi.deleteTodolist('someId').then(res => setState(res.data))
  }, [])
  return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    todolistsApi.updateTodolist('someId', 'newTitle').then(res => setState(res.data))
  }, [])
  return <div>{JSON.stringify(state)}</div>
}