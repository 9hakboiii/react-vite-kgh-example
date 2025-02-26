import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import routes from './route/Routes'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import BoardPage from './pages/BoardPage'

// 1. 기본 라우팅 방법
// function App2() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<HomePage/>}></Route>
//           <Route path='/profile' element={<ProfilePage/>}></Route>
//           <Route path='/board' element={<BoardPage/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// 2. 중첩 라우팅 - outlet
// /about/location
// 중첩을 나타내는 Route 태그의 path는 '/' 생략

// function About() {
//   return (
//     <div>
//       <h2>여기는 About 페이지입니다.</h2>
//       <p>대충 쇼핑몰 페이지라는 뜻</p>
//       {/*서브 페이지가 보여질 위치를 Outlet으로 지정해준다.*/}
//       <Outlet /> 
//     </div>
//   )
// }

// function Location() {
//   return (
//     <div>
//       <h2>여기는 Location 페이지입니다.</h2>
//       <p>대충 위치 페이지라는 뜻</p>
//     </div>
//   )
// }

// function App2() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/about' element={<About/>}>
//             <Route path='location' element={<Location />}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }


// 3. 중첩 라우팅 - /*

// function About() {
//   return (
//     <div>
//       <h2>여기는 About 페이지입니다.</h2>
//       <p>대충 쇼핑몰 페이지라는 뜻</p>

//       <Routes>
//         <Route path="/location" element={<Location />}></Route>
//       </Routes>  
//     </div>
//   )
// }

// function Location() {
//   return (
//     <div>
//       <h2>여기는 Location 페이지입니다.</h2>
//       <p>대충 위치 페이지라는 뜻</p>
//     </div>
//   )
// }

// function App2() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/about/*' element={<About/>}>
//             <Route path='location' element={<Location />}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// 3. useNavigate 

// function About() {

//   const navigate = useNavigate()

//   return (
//     <div>
//       <button onClick={() => 
//       {
//         navigate('/profile')

//       }}>프로필 페이지로 이동하기</button>
      

//       <button onClick={() => 
//       {
//         navigate(-1) // 이전 페이지

//       }}>이전 페이지로 이동하기</button>

//       <h2>여기는 About 페이지입니다.</h2>
//       <p>대충 쇼핑몰 페이지라는 뜻</p>
//     </div>
//   )
// }

// function Location() {
//   return (
//     <div>
//       <h2>여기는 Location 페이지입니다.</h2>
//       <p>대충 위치 페이지라는 뜻</p>
//     </div>
//   )
// }

// function App2() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/about/*' element={<About/>}>
//             <Route path='location' element={<Location />}></Route>
//           </Route>
//             <Route path='/profile' element={<ProfilePage/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }
// export default App2


//4. 파라미터 처리 하기
// url의 파라미터 값을 가져오기 위해 useParams()
// board/1 + get
//(✳✳ url :http://localhost:3000/board/21 인 경우)
// 👀 <Route path="board/:id" element={<BoardPage />} /> 👀
// const params = useParams();
// console.log(params);
// --console--
// {id : 21}

function About() {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => 
      {
        navigate('/profile')

      }}>프로필 페이지로 이동하기</button>
      

      <button onClick={() => 
      {
        navigate(-1) // 이전 페이지

      }}>이전 페이지로 이동하기</button>

      <h2>여기는 About 페이지입니다.</h2>
      <p>대충 쇼핑몰 페이지라는 뜻</p>
    </div>
  )
}

function Location() {
  return (
    <div>
      <h2>여기는 Location 페이지입니다.</h2>
      <p>대충 위치 페이지라는 뜻</p>
    </div>
  )
}

function App2() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/about/*' element={<About/>}>
            <Route path='location' element={<Location />}></Route>
          </Route>
            <Route path='/profile' element={<ProfilePage/>}></Route>
            <Route path='/board/:id' element={<BoardPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App2