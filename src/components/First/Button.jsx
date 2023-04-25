import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.section`
    button {
        background-color: #9de5d2;
        width: 100%;
        font-size: 0.875rem;
        font-weight: 700;
        text-align: center;
        height: 3.429em;
        margin: 0.857em 0;
        color: white;
        border-radius: 0.286em;
        cursor: pointer;
    }

    button:hover{
        background-color: white;
        border: 1px solid #9de5d2;
        color: #9de5d2;
    }
`

export default function Button() {
    return(
        <StyledButton>
            <button>신청하러 가기</button>
        </StyledButton>
    )
}