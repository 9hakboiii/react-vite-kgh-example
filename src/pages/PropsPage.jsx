import React from 'react'
import Hello from '../components/Hello'

const PropsPage = () => {
  /*Hello태그 자체를 함수 호출로 보고, 태그 안에 변수='값' 형태로 파라미터를 넘길 수 있다.*/
  const age = 29
  const name = '홍길동'

  return (
    <div>
      <Hello name={name} age={age} color='red'></Hello> 
      <Hello></Hello>
    </div>
  )
}

export default PropsPage