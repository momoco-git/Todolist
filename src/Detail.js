// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBucket,
  
  updateBucket,
} from "./redux/modules/bucketSlice";
import axios from 'axios';


const Detail = (props) => {
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((data) => data.bucket.list);
  
  const mylist = list.filter((x) => {
    return x.id === parseInt(params.id);
  });
 
  const delete_bucket = async(id)=>{
    await axios.delete(`http://localhost:5001/bucket/${id}`)
    dispatch(deleteBucket(id));
  }

  const update_bucket = async(id)=>{
    const data = {Done : !mylist[0].Done}
    await axios.patch(`http://localhost:5001/bucket/${id}`,data)
    dispatch(updateBucket(id))
  }
 
  return (
    <>
      <h1>{mylist[0].text}</h1>
      <button
        onClick={() => {
          delete_bucket(params.id)
          navigate(-1);
        }}
      >
        삭제하기
      </button>
      <button
        onClick={() => {
          update_bucket(params.id);
          navigate(-1);
          
        }}
      >
        {mylist[0].Done ? "취소하기" : "완료!!"}
      </button>
    </>
  );  
};

export default Detail;