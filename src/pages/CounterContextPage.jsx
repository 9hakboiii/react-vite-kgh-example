import React, {useContext} from 'react'
import {CounterContext} from '../context/CounterContext'

const CounterContextPage = () => {

  const {count, increment, decrement} = useContext(CounterContext) // 객체 구조분해이므로 { } 중괄호 사용   
  return (
    <div className='d-flex justify-content-center mt-5'>
      <h1>context 숫자: {count}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  )
}

export default CounterContextPage