import React from 'react'
import {auth, db} from "./firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {collection,addDoc,getDoc,where,query} from "firebase/firestore"
import {Route, Routes} from "react-router-dom"
function Signup () {
    const id_ref = React.useRef(null)
    const name_ref =React.useRef(null)
    const pass_ref =React.useRef(null)
    const pass2_ref =React.useRef(null)
    const navigate =useNavigate()
    const signupFB = async ()=>{
        // if(id_ref.current.value === ""){
        //     window.alert("아이디를 입력해주세요")
        //     return false;
        // }else if(name_ref.current.value === ""){
        //     window.alert("이름을 입력해주세요")
        //     return false;
        // }else if(pass_ref.current.value=== ""){
        //     window.alert("비밀번호를 입력해주세요")
        //     return false;
        // }else if(pass2_ref.current.value === ""){
        //     window.alert("비밀번호 확인을 입력해주세요")
        //     return false;
        // }else if (pass_ref.current.value !== pass2_ref.current.value){
        //     window.alert("비밀번호가 일치하지 않습니다")
        //     return false;
        // }else{return
           const user =  await createUserWithEmailAndPassword(
                auth,
                "go@na",
                "1234"
                )
            console.log(user)
             await addDoc(collection(db,"users"),{user_id:id_ref.current.value ,user_name:name_ref.current.value,bucketlist:[]})
            // window.alert("회원가입 완료!")    
            // navigate("/login")

            
    }
    return(
        <div>
            아이디(이메일): <input ref={id_ref}/><br/>
            이름 : <input ref={name_ref}/><br/>
            비밀번호 : <input ref={pass_ref}/><br/>
            비밀번호 확인 : <input ref={pass2_ref}/><br/>
            <button onClick={signupFB}>회원가입하기</button>
        </div>

    )
}
export default Signup