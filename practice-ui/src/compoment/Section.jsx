import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Section() {
  const [index, setIndex] = useState(0);
  const isScrolling = useRef(false);

  window.addEventListener("wheel", (e) => {}, { passive: false });

  useEffect(() => {
    const handleIndex = (e) => {
      e.preventDefault();
      // 스크롤 중이라면 함수 종류
      if (isScrolling.current) return;
      isScrolling.current = true; //스크롤 중임을 명사
      setTimeout(() => {
        isScrolling.current = false; // 스크롤이 끝날 쯤에 다시 동작
      }, 500);
      //e.deltaY :휠 방향에 따라 양수(내림)/음수(올림)
      if (e.deltaY > 0) {
        if (index < 2) setIndex(index + 1);
      } else {
        if (index > 0) setIndex(index - 1);
      }
    };
    //window.scrollTo():스크롤바를 움직이는 매서드
    // window.innerHeight: 뷰포트 높이
    window.addEventListener("wheel", handleIndex, { passive: false });

    window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
    //뒷정리 함수

    return () => {
      window.removeEventListener("wheel", handleIndex, {
        passive: false,
      });
    };
  }, [index]);
  return (
    <Container>
      <SectionItem bgColor="red">1</SectionItem>
      <SectionItem bgColor="skyblue">2</SectionItem>
      <SectionItem bgColor="tomato">3</SectionItem>
    </Container>
  );
}

const Container = styled.div``;

const SectionItem = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`;

export default Section;
