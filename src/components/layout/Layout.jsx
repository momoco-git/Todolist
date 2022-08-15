import React, { useState } from 'react';
import './style.css'
import Form from '../form/Form';
import Header from '../header/Header';
import List from '../list/List';
import TodoList from '../pages/TodoList';

const Layout = ()=>{
    const[Todos, setTodos] = useState([
        { id: 1, Done : true,title : '리액트하기', todoDesc : '리액트 기초를 익혀봅시다'}
        ,{ id: 2, Done : false,title : '라우터', todoDesc : '라우터 기초를 익혀봅시다'}
        ,{ id: 3, Done : false,title : '리덕스', todoDesc : '리덕스 기초를 익혀봅시다'}
    ])

    


  


    const addTodo =(Todo) =>{
        setTodos([
            ...Todos,
            Todo
        ])
    }
   
    return (
        
        <TodoList>
            <Header></Header>
           <Form addTodo ={addTodo} todo ={Todos} ></Form>
           <List todos={Todos} setTodos={setTodos} ></List>
        </TodoList>
        


    )
}

export default Layout