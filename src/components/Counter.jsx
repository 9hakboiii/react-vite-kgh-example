import React, { useState } from 'react'

// 1. 화면 갱신이 안 되고 있음
// state: 상태
// state란 리엑트가 관리하는 화면갱신용 변수

const Counter = () => {

  // let number = 0
  const [number, setNumber] = useState(0)

  const onIncrease = () => {
    // number = number + 1
    // setNumber((number) => number + 1) : 콜백 함수 형태로 구현해도 됨
    setNumber(number + 1)
  }

  const onDecrease = () => {
    setNumber(number - 1)
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button> 
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter