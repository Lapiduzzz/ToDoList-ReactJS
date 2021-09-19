import React from 'react'
import s from './App.module.css'
import ListItem from "./List-item";


const List = (props) => {
    return <div className={s.list}>
        {props.tasks.map(el => <ListItem description={el.description}
                                         completed={el.completed}
                                         key={el.id}
                                         id={el.id}
                                         completedTask={props.completedTask}
                                         removeTask={props.removeTask}
        />)}
    </div>
}

export default List;