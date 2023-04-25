import React from "react";
import styled from 'styled-components';
import Header from "../components/First/Header";
import Article from "../components/First/Article";

const StyledFirst = styled.section`
display: flex;
justify-content: space-between;

    .text{
        padding : 10rem 0 10rem 5rem;
    }
    .point{
        width : 40%;
        height: 100vh;
        background-color: #9de5d2;
    }

`

const First = () => {
    return (
        <StyledFirst>
            <div className="text">
                <Header/>
                <Article/>
            </div>
            <div className="point">
            </div>
        </StyledFirst>
    );
};

export default First;