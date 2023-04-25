import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.section`
    margin-bottom : 1rem;
    padding-left: 3rem; 
    h1{
        font-size: 250%;
        font-weight: 600;
    }
    .small-title{
        font-size: 130%;
    }
}
`

export default function Header() {
    return(
        <StyledHeader>
            <p className='small-title'>SOP 아시아조직 Innovation Office 상무와 함께하는</p>
            <h1>식사 기회를 놓치지 마세요</h1>
        </StyledHeader>
    )
}