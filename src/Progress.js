import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";

const Progress = (props) => {
  const list = useSelector((state) => state.bucket.list);

  let count = 0;
  list.map((x, i) => {
    if (x.Done) {
      count++;
    }
  });

  return (
    <ProgressBar>
      <HighLight width={(count / list.length) * 100 + "%"} />
      <Dot />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 30px;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
const HighLight = styled.div`
  background: #673ab7;
  transition: 1s;
  width: ${(props) => props.width};
  height: 30px;
`;
const Dot = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border: 4px solid #673ab7;
  border-radius: 40px;
  margin: 0 0 0 -20px;
`;

export default Progress;