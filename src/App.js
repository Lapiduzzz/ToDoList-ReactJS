import React,{useState, useEffect} from 'react'
import s from './App.module.css';
import Input from "./Input";
import List from "./List";


function App() {

    const [tasks, setTasks] = useState([])
    const [completeState, setCompleteState] = useState(true)

    useEffect(()=>{
        let task = []
        let completed = []
        if (completeState){
            tasks.forEach(item => item.completed ? completed.push(item) : task.push(item))
            setTasks([...task, ...completed] )
            setCompleteState(false)
        }
    },[tasks, completeState])

    useEffect(()=>{
        localStorage.length && setTasks([...JSON.parse(localStorage.getItem('tasks'))])
    },[])

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (description) =>{
        let id = tasks.length + 1
        for (let i of tasks){
            if (i.id === id){
                id += 1
            }
        }
        setCompleteState(true)
        setTasks([...tasks, {id: id, description: description, completed: false}])
    }

    const removeTask = (id) =>{
        setTasks(tasks.filter(newArr => newArr.id !== id))
    }
    const completedTask = (id) =>{
        let tasksUpdate = tasks.map(item => {
            if(item.id === id){
                item.completed = !item.completed
            }
            return item
        })
        setCompleteState(true)
        setTasks([...tasksUpdate])
    }
    return <div className={s.background}>
            <div className={s.wrapper}>
                <h1>Things To Do</h1>
                <Input addTask={addTask}/>
                <List tasks={tasks} completedTask={completedTask} removeTask={removeTask}/>
            </div>
    </div>
}

export default App;
