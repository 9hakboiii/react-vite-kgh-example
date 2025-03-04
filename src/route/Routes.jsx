import { CounterProvider } from "../context/CounterContext"
import BoardPage from "../pages/BoardPage"
import BootstrapPage from "../pages/BootstrapPage"
import ConditionalPage from "../pages/ConditionalPage"
import ContextNotUsePage from "../pages/ContextNotUsePage"
import ContextUsedPage from "../pages/ContextUsedPage"
import CounterContextPage from "../pages/CounterContextPage"
import CounterPage from "../pages/CounterPage"
import HelloPage from "../pages/HelloPage"
import HomePage from "../pages/HomePage"
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
        path: '/contextnotuse',
        element: <ContextNotUsePage />,
        title: '컨텍스트API미사용',
    },

    {
        path: '/contextused',
        element: <ContextUsedPage/>,
        title: '컨텍스트API사용',
    },

    {
        path: '/countercontext',
        element: ( 
        <CounterProvider>
            <CounterContextPage/>
        </CounterProvider>),
        title: '컨텍스트API사용',
    },
  ]
  export default routes