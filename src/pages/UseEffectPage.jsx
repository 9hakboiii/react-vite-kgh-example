import React, { useEffect, useState } from 'react'

// useEffect(() => {
//   // 매 렌더링마다 실행
// });

// useEffect(() => {
//   // useEffect는 오직 한 번, 컴포넌트가 처음 마운트될 때만 실행됨
     // 이후의 업데이트에서는 실행되지 않음.
// }, []);

// useEffect(() => {
//   // 컴포넌트가 처음 렌더링된 이후 실행
//   // a 또는 b가 변경될 때마다 useEffect가 실행됨
//   // 이 배열 안에 있는 의존성(예를 들어 a와 b)이 변경될 때마다 실행
// }, [a, b]);

const UseEffectPage = () => {

  const [firstCount, setFirstCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)

  /*
  useEffect(()=>{
    console.log(`랜더링 마다 실행 ${Date()}`); // 화면이 업데이트 될 때마다 실행 (처음 화면 그릴떄도 포함)
  })*/

  useEffect(()=>{
    // 컴포넌트가 처음 랜더링 될 때만(created 될 때만)
    console.log(`처음 랜더링 될 때만 실행 ${Date()}`); 
  }, [])

  useEffect(()=>{
    // 컴포넌트가 처음 랜더링 될때 실행 한 번(created 될 때만)
    // a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행 
    console.log(`컴포넌트 변경 ${Date()}`); 
  }, [firstCount, secondCount])


  const firstCountHandler = () => {
    setFirstCount((firstCount) => firstCount + 1)
  }

  const secondCountHandler = () => {
    setSecondCount((secondCount) => secondCount + 1)
  }

  return (
    <div className='text-center mt-3'>
    <h1>{firstCount}</h1>
    <button onClick={firstCountHandler}>카운터 증가</button>
    <h1>{secondCount}</h1>
    <button onClick={secondCountHandler}>카운터 증가</button>
    </div>
  )
}

export default UseEffectPage