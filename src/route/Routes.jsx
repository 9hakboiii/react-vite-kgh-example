import AxiosClient from "../pages/AxiosClient"
import AxiosGetPage from "../pages/AxiosGetPage"
import BoardPage from "../pages/BoardPage"
import BootstrapPage from "../pages/BootstrapPage"
import ConditionalPage from "../pages/ConditionalPage"
import CounterPage from "../pages/CounterPage"
import ClassNameUsePage from "../pages/cssPage/ClassNameUsePage"
import InlineStylePage from "../pages/cssPage/inlineStylePage"
import StyledComponent from "../pages/cssPage/StyledComponent"
import GradeInputPage from "../pages/GradeInputPage"
import GradeInputPage2 from "../pages/GradeInputPage2"
import HelloPage from "../pages/HelloPage"
import HomePage from "../pages/HomePage"
import InputPage from "../pages/InputPage"
import JSXPage from "../pages/JSXPage"
import ProfilePage from "../pages/ProfilePage"
import PropsPage from "../pages/PropsPage"
import UseEffectPage from "../pages/UseEffectPage"
import UseRef1Page from "../pages/UseRef1Page"
import UseRef2Page from "../pages/UseRef2Page"

//React Routes, Route 사용시 배열로 관리하기
const routes = [
    {
      path: '/',
      element: <HomePage />,
      title: 'Home',
    },

    {
        path: '/profile',
        element: <ProfilePage />,
        title: 'profile',
    },

    {
        path: '/board',
        element: <BoardPage />,
        title: 'Board',
    },

    {
        path: '/hello',
        element: <HelloPage />,
        title: 'hello',
    },

    {
        path: '/jsx',
        element: <JSXPage />,
        title: 'jsx문법',
    },

    {
        path: '/conditional',
        element: <ConditionalPage />,
        title: '조건부랜더링',
    },

    {
        path: '/bootstrap',
        element: <BootstrapPage />,
        title: '부스트르랩적용',
    },

    {
        path: '/props',
        element: <PropsPage />,
        title: 'Props적용',
    },

    {
        path: '/usestate',
        element: <CounterPage />,
        title: 'useState-연습',
    },

    
    {
        path: '/useeffect',
        element: <UseEffectPage />,
        title: 'useEffect-연습',
    },

    {
        path: '/useref',
        element: <UseRef1Page />,
        title: 'useRef-1',
    },

    {
        path: '/useref2',
        element: <UseRef2Page />,
        title: 'useRef-2',
    },

    {
        path: '/axiosget',
        element: <AxiosGetPage />,
        title: 'axios-get',
    },

    {
        path: '/axiosclient',
        element: <AxiosClient />,
        title: 'axios-client',
    },

    {
        path: '/input',
        element: <InputPage />,
        title: 'input-page',
    },

    {
        path: '/grade',
        element: <GradeInputPage />,
        title: 'gradeinput',
    },

    {
        path: '/grade2',
        element: <GradeInputPage2 />,
        title: 'gradeinput2',
    },

    {
        path: '/inlinestyle',
        element: <InlineStylePage />,
        title: '인라인스타일',
    },

    {
        path: '/use-css',
        element: <ClassNameUsePage />,
        title: 'css파일 적용',
    },

    {
        path: '/style-css',
        element: <StyledComponent />,
        title: 'styled-components',
    },
  ]
  export default routes