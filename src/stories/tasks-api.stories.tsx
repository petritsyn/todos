import React, { useEffect, useState } from 'react'
import { tasksApi } from '../api/api'

export default {
    title: 'tasks API',
  }

  export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      tasksApi.getTasks('d21edbe5-1a1c-4827-bf6f-eefb5065c381').then(res => {
        setState(res.data)
        
    })
    }, [])
    return <div>{JSON.stringify(state)}</div>
  }

  export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      tasksApi.createTask('d21edbe5-1a1c-4827-bf6f-eefb5065c381', 'new task').then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
  }

  export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      tasksApi.updateTask('d21edbe5-1a1c-4827-bf6f-eefb5065c381', 'b052537c-d4fa-4402-8914-f34c3d6ef85a', 'update task').then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
  }

  export const DeleteTaskk = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      tasksApi.deleteTask('d21edbe5-1a1c-4827-bf6f-eefb5065c381', 'b052537c-d4fa-4402-8914-f34c3d6ef85a').then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
  }