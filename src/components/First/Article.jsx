import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";

const StyledArticle = styled.section`
display: flex;

img{
    width: 30%;
    height: 30%;
    margin: 0 3rem;
}

.seminar-info{
    margin-bottom: 1rem;
}

.seminar-topic{
    margin-bottom: 1rem;
}

.seminar-topic-point{
    font-weight: 600;
}

`;

export default function Article() {
  return (
    <StyledArticle>
      <img
        className="logoImg"
        src={`${process.env.PUBLIC_URL}/assets/img/speaker.png`}
        alt="speakerImg"
      />
      <article>
        <div className="seminar-info">
            <p>일시 : 2023년 05월 27일 토요일 16시</p>
            <p>장소 : 롯데월드타워35층</p>
        </div>
        <div className="seminar-topic">
            <p className="seminar-topic-point">대화 분야</p>
            <p>스마트하게 조직에서 일하는 법</p>
            <p>글로벌 경험을 기반으로 투자, 혁신 및 기술 트렌드</p>
        </div>
        <div className="seminar-career">
            <p>현. SOP 아시아조직 Innovation Office 상무/파트너</p>
        </div>
        <Link to="/truth">
            <Button/>
        </Link>
      </article>
    </StyledArticle>
  );
}
