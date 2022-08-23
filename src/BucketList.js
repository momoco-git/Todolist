// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const BucketList = (props) => {
  let navigate = useNavigate();
  const my_lists = useSelector((state) => state.bucket.list);

  return (
    <ListStyle>
      {my_lists.map((list, num) => {
        return (
          <ItemStyle
            Done={list.Done}
            className="list_item"
            key={list.id}
            onClick={() => {
              navigate("/detail/" + list.id);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  color: ${(props) => (props.Done ? "white" : "black")};
  background-color: ${(props) => (props.Done ? "#a673ff" : "aliceblue")};
`;

export default BucketList;
