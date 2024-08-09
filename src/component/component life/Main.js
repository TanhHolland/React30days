import React, { Component, useState } from 'react'

const App = () => {
  const [value,setValue] = useState(0);
  const handleClick = (e) => {
    setValue(value + 1);
  }
  React.useEffect(()=> {
    console.log('truoc');
  },[])
  console.log('sau');
  return (
    <>
        <h1>{value}</h1>
        <button onClick={handleClick}>Click</button>
    </>
  );
}
export default App;