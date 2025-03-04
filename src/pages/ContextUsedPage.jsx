import React, { createContext, useContext, useState } from 'react'

// context를 생성하면 => provider, consumer가 생성됨
// provider : value를 내려주는 역할
// consumer : value를 받아오는 역할
const HelloContext = createContext('안녕하세요') // key(HelloContext) : value('안녕하세요) 느낌 

const ContextUsedPage = () => {
  
  const [value, setValue] = useState(true)

  return (
    <>
      <HelloContext.Provider value={value ? 'good' : 'bad'}>
        <GrandParent />
        <button onClick={() => setValue(!value)}>Click Me!</button>
      </HelloContext.Provider>
    </>
  )
}

function GrandParent() {
  return <Parent />
}

function Parent() {
  return <Child />
}

function Child() {
  const text = useContext(HelloContext) // 해당 컨텍스트의 value 값을 가져옴
  return <div>컨텍스트에서 받아온 데이터:{text}</div>
}

// function Child() {
//   // comsume를 잘 상요하지 않음.
//   return (
//     <HelloContext.Consumer>
//       {value => <div>컨텍스트에서 받아온 데이터:{value}</div>}
//     </HelloContext.Consumer>
//   )
// }

export default ContextUsedPage