import React, { Fragment } from 'react'

// 1. JSX 문법
// jsx 문법은 html과 js를 조합한 문법임.
// 문법 1. 부모 태그 반드시 필요(<div></div> or <></> or <Fragment></Fragment>)
// 2. 변수 사용시 {} 표현식 문법 사용
// 표현식 문법 = 식이 값으로 평가될 수 있는 문법
// 3. 조건문 사용시 삼항연산자 사용 (if문 x)
// 4. class는 className 으로 표기
// 5. React DOM은 HTML 에트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용 한다.

const JSXPage = () => {

  const name = '리엑트'
  const color = 'red'
  const isLogin = true

  const style = {
    backgroundColor: 'green',
    fontSize: '32px'
  }

  return (
    <Fragment>
      { // 자바스크립트 사용할려면 부모 태그 안에서 { } 열고 사용
        isLogin ? (
          <div>로그인 되었습니다.</div>
        ) : (
          <div>로그인이 필요합니다.</div>
        )
      }
      {/* <p style='color: red; background-color: yellow'>인라인 스타일</p>*/}
      <div className='d-flex' style={style}>안녕하세요</div>
      <div style={ {color: color} }>{name}</div> 
    </Fragment>
  )
}

export default JSXPage