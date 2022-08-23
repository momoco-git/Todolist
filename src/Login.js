import React from 'react'
import {auth, db} from "./firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {useNavigate} from "react-router-dom"
import {collection,addDoc,getDoc,where,query} from "firebase/firestore"
import {Route, Routes} from "react-router-dom"
function Login (){
    const navigate =useNavigate()
    const id_ref = React.useRef(null)
    const pass_ref =React.useRef(null)

    const loginFB = async ()=>{
        const user = await signInWithEmailAndPassword(
            auth,
            id_ref.current.value,
            pass_ref.current.value
        )
        const bucket = []
        const checkid = async ()=>{
          const user_doc = await getDoc(query(
            collection(db,"users"),where('user_id','==',user.user.email)
        ))
          user_doc.forEach((x)=>{bucket.push(x.data().bucketlist)})
        }
    }    
    
    return(

        <div>
        아이디(이메일): <input ref={id_ref}/><br/>
        비밀번호 : <input ref={pass_ref}/><br/>
        <button onClick={loginFB}>로그인</button>
        <button onClick={()=>{navigate("/signup")}}>회원가입하러가기</button>
        </div>

    )
}

export default Login


