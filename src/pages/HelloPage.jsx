import React from 'react'
import Hello from '../components/Hello'

/*
function HelloPage() {
  return (
    이런식으로 만들어도 됨
  )
}
*/

// 컴포넌트 = js + xml(html) 문법 = jsx
// jsx 문법은 html과 js를 조합한 문법임.
// 문법 1. 부모 태그 반드시 필요(<div></div> or <></> or <Fragment></Fragment>)
const HelloPage = () => {
  return (  // 한 개 이상 내용이 있으면 () 씌워야함
    <>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
    </>
  )
}

export default HelloPage