import React from 'react'

// const Hello = (props) => { // 1번째 방식
const Hello = ({name, age, color}) => { // 2. 객체 방식
  return (
    <div style={{ color: color}}>
      안녕하세요: {name} <br/>
      색상: {color}<br/>
      나이: {age}<br/>
    </div>
  )
}

export default Hello