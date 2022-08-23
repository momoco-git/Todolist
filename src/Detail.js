// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBucket,
  deleteBucketFB,
  updateBucketFB,
} from "./redux/modules/bucketSlice";


const Detail = (props) => {
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((data) => data.bucket.list);
  const mylist = list.filter((x) => {
    return x.id === params.id;
  });

  return (
    <>
      <h1>{mylist[0].text}</h1>
      <button
        onClick={() => {
          dispatch(deleteBucketFB(params.id));
          navigate(-1);
        }}
      >
        삭제하기
      </button>
      <button
        onClick={() => {
          navigate(-1);
          dispatch(updateBucketFB(params.id));
        }}
      >
        {mylist[0].Done ? "취소하기" : "완료!!"}
      </button>
    </>
  );  
};

export default Detail;
