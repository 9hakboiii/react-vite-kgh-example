import React from 'react'
import { useParams } from 'react-router-dom'

const BoardPage = () => {

  const params = useParams()
  console.log(params) // {id: 'params.id'} 객체 형태로 뿌림

  return (
  <h1 className='text-center mt-5'>게시판 입니다. {params.id}번 글 입니다.</h1>
  )
}

export default BoardPage