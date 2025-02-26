import React, { useEffect, useState } from 'react'
import axios from 'axios'
import userService from '../services/UserService'

const AxiosGetPage = () => {
  const [data, setData] = useState(null)

  // 처음 화면이 랜더링 됐을 때, getUsers() 초기화
  useEffect( () => {
    userService.getUsers().then( (data) => { // async-await 으로 받으면, .then()을 사용해야 함
      setData(data)
    })
  }, [])

  // const getUsers = async() => {
  //   await axios.get('https://jsonplaceholder.typicode.com/posts')
  //         .then((response) => {
  //           // 통신이 성공 했을때
  //           console.log(response)
  //           setData(response.data)
  //         })
  //         .catch(function(error) {
  //           // 통신 에러가 발생했을 때
  //           console.log(error)
  //         })
  //         .then( () => {
  //           // try catch finally 에서 finally 부분에 해당
  //           console.log('에러가 나든 안 나든 무조건 실행')
  //         })
  // }

  // post 방식
  const postClick = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId: 123435,
      id: 101,
      body: '테스트 홍길동',
      title: 'test title 홍길동'
    })
    .then((response) => {
      // 통신이 성공 했을때
      console.log(response)
      setData(response.data)
    })
    .catch(function(error) {
      // 통신 에러가 발생했을 때
      console.log(error)
    })
  }

  return (
    <div className='text-center mt-5'>
      <h2>Axios get 연습</h2>
      <button onClick={postClick}>Post방식 연습</button> 
      <hr />
      {
        data && data.map((post, index) => (
          <div key={index}>
            <h3>타이틀: {post.title}</h3>
            <h3>유저아이디: {post.userId}, 아이디: {post.id}</h3>
            <h3>바디: {post.body}</h3>
            <hr />
            <br />
          </div>
        ))
      }
    </div>
    
  )
}

export default AxiosGetPage
