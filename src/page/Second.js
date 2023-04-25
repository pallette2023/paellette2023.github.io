import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 3rem;
    img{
        width: 3%;
        cursor: pointer;
    }
`

const StyledSecond = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 8rem 0 0 0;
    font-size: 1.5rem;

    div{
        display: inline
    }

    .point{
        color: #9de5d2;
        font-weight: 600;
    }

    input{
        margin-bottom: 0.75em;
        width: 19.5em;
        height: 2em;
        padding: 0.813em 0 0.813em 13em;
        border: 1px solid #dee2e6;
        border-radius: 0.25em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #727272;
        font-size: 1.3rem;
        margin-right: 0.5rem;
    }

    .contact-email{
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-top: 3rem; 
    }

    .contact-email > h3{
        font-size: 1.3rem;
        font-weight: 600;
        margin: 0.3rem 0; 
    }

    .contact-email > p{
        font-size: 1rem;
        margin-bottom: 0.3rem; 
    }

    .contact-email > .deliver{
        display: flex;
        flex-direction: row;
    }

    button {
        background-color: #9de5d2;
        width: 5em;
        height: 3em;
        font-size: 0.875rem;
        font-weight: 700;
        text-align: center;
        color: white;
        border-radius: 0.286em;
        cursor: pointer;
    }
`

const Second = () => {
    return (
        <Wrapper>
            <Link to="/">
                <img
                    className="backImg"
                    src={`${process.env.PUBLIC_URL}/assets/img/back.png`}
                    alt="backImg"
                />
            </Link>
            <StyledSecond>
                <p>
                    안녕하세요.<br/>
                    저희는 <div className="point">가천코코네스쿨 2기 딜라이프 팀</div>입니다.<br/>
                    <div className="point">가짜 문 프리토타입</div>에 대해 들어보신 적 있으신가요?<br/>
                    아직 내놓을 게 아무것도 없다 하더라도<br/>
                    제품이나 서비스가 존재하는 것처럼 보일 만한 현관문 (웹 사이트 등)을 설치하면,<br/>
                    얼마나 많은 사람이 아이디어에 관심을 가질지 데이터를 얻을 수 있다는 것입니다.<br/>
                    저희는 해당 프로토타입을 바탕으로 <div className="point">XYZ 가설을 검증해 보는 프로젝트</div>를 진행하게 되었습니다. 
                </p>
                <div className="contact-email">
                    <h3>이메일을 알려주세요</h3>
                    <p>딜라이프 서비스가 런칭되면 이메일로 소식을 알려드릴게요.</p>
                    <div className="deliver">
                        <input className="input" placeholder="@delight.life"></input>
                        <button>전송</button>
                    </div>
                </div>
            </StyledSecond>
        </Wrapper>
    );
};

export default Second;