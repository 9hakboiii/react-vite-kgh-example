import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import routes from './route/Routes'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'


// outlet을 사용하여, Router.jsx 파일의 path 결과에 따라 
// root(App.jsx)를 기준으로 element를 넘김.
function App() {
  return (
    <>
      <div>헤더 입니다</div>
      <Outlet /> 
      <div>꼬리말</div>
    </>
  )
}

export default App
