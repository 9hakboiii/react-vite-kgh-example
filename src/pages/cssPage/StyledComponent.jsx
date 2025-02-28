import React from 'react'
import styled from 'styled-components'

const StyledComponent = () => {

    // ``(백틱)으로 감싸야함
    const StyledDiv = styled.div` 
        color: green;
        `
    let 박스 = styled.div`
        padding: 20px;
        background-color: red;
    `

    let 제목 = styled.h4`
        font-size: 25px;
        color: blue;
    `
    

    return (
        <>
            <StyledDiv>
                <p>스타일드 컴포넌트 입니다.</p>
            </StyledDiv>
            <박스>
                <제목>styled components로 만든 태그 </제목>
            </박스>
        </>
  )
}

export default StyledComponent