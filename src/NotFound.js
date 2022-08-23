import React from 'react';
import {useNavigate} from 'react-router-dom'

const NotFound = ()=>{
    let navigate= useNavigate();
    return(
        <>
        <h1> 주소가 올바르지 않습니다!!</h1>
        <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
        </>
        
    )
}
export default NotFound