import React, {useState} from 'react'
import s from './Input.module.css'

const Input = (props) => {
    const [value, setValue] = useState('')
    const [focus, setFocus] = useState(false)

    const changeValue = (e) => {
        setValue(e.target.value)
    }
    const add = () => {
        if (value.length > 0) {
            props.addTask(value)
            setValue('')
        }
    }
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            add()
        } else if (e.key === 'Escape') {
            setValue('')
        }
    }

    return <div className={s.input_wrapper}>
        <input className={focus ? s.focus : s.input}
               type="text" onChange={changeValue}
               onFocus={() => setFocus(true)}
               onBlur={() => {setFocus(false)}}
               onKeyDown={onKeyDown}
               value={value}
               placeholder={'New Task'}
        />
        <button className={s.input_button} onClick={add}>Add Task</button>
    </div>

}

export default Input;