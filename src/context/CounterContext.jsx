import { createContext, useState } from "react";

    const CounterContext = createContext(); // default value is undefined

    const CounterProvider = (props) => {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + 1);
        }

        const decrement = () => {
            setCount(count - 1);
        }
    
        // count 변수와 increment, decrement 함수를 value로 설정하여 전역으로 만듬
        // CounterProvider 컴포넌트의 자식 컴포넌트를 렌더링, 부모(provider = value 객체)를 사용할 자식들(props로 부모를 넘겨받을 태그들)
        return (
            <CounterContext.Provider value={{ count, increment, decrement }}> 
                {props.children}
            </CounterContext.Provider>
        )
    }


export{CounterContext, CounterProvider}