import BoardPage from "../pages/BoardPage"
import BootstrapPage from "../pages/BootstrapPage"
import ConditionalPage from "../pages/ConditionalPage"
import HelloPage from "../pages/HelloPage"
import HomePage from "../pages/HomePage"
import JSXPage from "../pages/JSXPage"
import ProfilePage from "../pages/ProfilePage"

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
  ]
  export default routes