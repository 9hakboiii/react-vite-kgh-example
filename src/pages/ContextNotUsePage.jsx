import React, { Fragment } from 'react'

const ContextNotUsePage = () => {
  return (
    <Fragment>
        <GrandParent style='color: red' value="안녕하세요." />
    </Fragment>
  )


  function GrandParent(props) {
    return <Parent value={props.value} />;
  }
  
  function Parent({ value }) {
    return <Child value={value} />;
  }
  
  function Child({ value }) {
    return <div>Received: {value}</div>;
  }

}

export default ContextNotUsePage