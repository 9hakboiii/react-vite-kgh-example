import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    // Link to = <a href=''></a>
    // Link는 virtual dom 기반이므로 수정 사항만 업데이트
    // a 태그는 html 모두 랜더링 
    <>
        <h1 className='text-center mt-5'>메인페이지 입니다.</h1>
        <Link to='/profile'>프로필 페이지</Link> 
    </>
  )
}

export default HomePage