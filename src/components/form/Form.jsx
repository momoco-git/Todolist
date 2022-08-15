import React, {useState} from 'react'
import './style.css'

let number =3
const Form = (props)=>{
    
 
    

    const [todoTitle, setTodoTitle] = useState('')
    const [todoDesc, setTodoDesc] = useState('')
    const addTodo = props.addTodo 
    const resetForm = () => {
        setTodoTitle('');
        setTodoDesc('')
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo({
            id : number +1,
            Done : false,
            title : todoTitle,
            todoDesc : todoDesc,
        });
        number++;
        resetForm();
    }


    return (
        <form onSubmit={onSubmit} className='form'> 
            <div className='input-group'>
            <label>제목</label> < input type='text' value={todoTitle} onChange={e => setTodoTitle(e.target.value)} />
            <label>내용</label> < input type='text' value={todoDesc} onChange={e => setTodoDesc(e.target.value)} />
            </div>
            <div>
            <button type='submmit' className='add-button'>추가하기</button>
            </div>
                
        </form>
            
           

       
  
        


    )
}

export default Form