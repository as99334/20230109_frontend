import { useState } from "react";
import styled from "styled-components";

const PI = 3.14; // 상수(Constant)는 재할당 불가능

function Slider() {
  const [상태, 최신화] = useState(0);
  // 이전 번튼 클릭시 index 1 줄어 들고, 다음 1증가

  const 상태증가 = () => {
    if (상태 < 2) 최신화(상태 + 1);
  };

  const 상태감소 = () => {
    if (상태 > 0) 최신화(상태 - 1);
  };

  return (
    <Container>
      <SlideList index={상태}>
        <SlideItem bgColor="pink">
          <img src={process.env.PUBLIC_URL + "/108526139.2.jpg"} alt="" />
        </SlideItem>
        <SlideItem bgColor="skyblue">
          <img
            src={process.env.PUBLIC_URL + "/201503081219_61130009213853_1.jpg"}
            alt=""
          />
        </SlideItem>
        <SlideItem bgColor="blue">
          <img src={process.env.PUBLIC_URL + "/쿼카.jpg"} alt="" />
        </SlideItem>
      </SlideList>
      <button onClick={상태감소}>이전</button>
      <button onClick={상태증가}>다음</button>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eee;
  overflow: hidden;
`;

const SlideList = styled.ul`
  display: flex;
  transform: translate(${({ index }) => index * -100}%);
`;

const SlideItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 300px;
  flex-shrink: 0;
  border: 1px solid black;
  list-style: none;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  img {
    width: 100%;
  }
`;

export default Slider;
