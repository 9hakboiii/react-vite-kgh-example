import React, { Fragment } from "react";

// 조건부 랜더링 예제
const ConditionalPage = () => {
  const isLogin = true;

  // 1. 조건부 랜더링 = if 문 사용 (return 밖에서 사용, 많이 사용 안 함)
  // if (isLogin) {
  //   return (
  //     <Fragment>
  //       <h2>조건부 랜더링 예시 1번입니다.</h2>
  //       <div>
  //         <button style={{margin: 10}}>Logout</button>
  //       </div>
  //     </Fragment>
  //   )
  // } else {
  //   return (
  //     <Fragment>
  //       <h2>조건부 랜더링 예시 1번입니다.</h2>
  //       <div>
  //         <button style={{margin: 10}}>Login</button>
  //       </div>
  //     </Fragment>
  //   )
  // }

  // 2. 조건부 랜더링 = switch문 사용
  // switch (isLogin) {
  //   case true:
  //     return (
  //       <Fragment>
  //         <h2>조건부 렌더링 예시 2번입니다.</h2>
  //         <div>
  //           <button style={{ margin: 10 }}>Logout</button>
  //         </div>
  //       </Fragment>
  //     )
  //   case false:
  //     return (
  //       <Fragment>
  //         <h2>조건부 렌더링 예시 2번입니다.</h2>
  //         <div>
  //           <button style={{ margin: 10 }}>Login</button>
  //         </div>
  //       </Fragment>
  //     )
  //   default:
  //     return null
  // }

  // 3. 조건부 랜더링 = 삼항연산자 사용 (1순위)
  // return (
  //   <Fragment>
  //     <h2>조건부 랜더링 예시 3번 입니다.</h2>
  //     {
  //       isLogin ? (
  //         <div>
  //           <button style={{margin: 10}}>Logout</button>
  //         </div>
  //       ) : (
  //         <div>
  //           <button style={{margin: 10}}>Logout</button>
  //         </div>
  //       )
  //     }
  //   </Fragment>
  // )

  // 4. 조건부 랜더링 = && 연산자 사용 (2순위)

  return (
    <Fragment>
      <h2>조건부 랜더링 예시 4번입니다.</h2>
      {isLogin && (
        <div>
          <button style={{ margin: 10 }}>Logout</button>
        </div>
      )}
    </Fragment>
  );
};

export default ConditionalPage;
