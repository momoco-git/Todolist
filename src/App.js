import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";

import Progress from "./Progress";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { createBucket ,loadBucket} from "./redux/modules/bucketSlice";
import axios from 'axios'



function App() {
  const text = React.useRef(null);
  const dispatch =useDispatch()

  const load_bucket = async ()=>{
    const res = await axios.get("http://localhost:5001/bucket")
    dispatch(loadBucket(res.data));
    
  }
  
  React.useEffect(() => {
    load_bucket()
  }, []);

  const distpatch = useDispatch();
  function resetplace() {
    text.current.value = "";
  }

  const addBucketList = async() => {
    const newlist = { text: text.current.value, Done: false };
    await axios.post("http://localhost:5001/bucket",newlist)
    distpatch(createBucket(newlist));
    resetplace();
  };

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <Progress />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Routes>
          <Route path="/" element={<BucketList />}/>
          <Route path="/detail/:id" element={<Detail/>} />
          <Route element={<NotFound />}/>
            
          
        </Routes>
      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  & > * {
    padding: 10px;
  }
  & input {
    border: 1px solid #888;
    margin-right: 10px;
    width: 60%;
  }
  & input:focus {
    border: 1px solid #a672ff;
    outline: none;
  }
  & button {
    width: 25%;
    color: #fff;
    border: #a673ff;
    background: #a673ff;
  }
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;