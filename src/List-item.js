import React from 'react';
import s from './List-item.module.css'

const ListItem = (props) => {

    return <div className={props.completed ? `${s.list_item} ${s.complete}` : s.list_item} >
        <input className={s.completed} type="checkbox"
               checked={props.completed}
               onChange={()=>props.completedTask(props.id)}/>
        <p className={s.description}>{props.description}</p>
        <img className={s.remove}
             src="http://cdn.onlinewebfonts.com/svg/img_233606.png"
             onClick={() => props.removeTask(props.id)}
             alt={''}
        />

    </div>
}

export default ListItem;