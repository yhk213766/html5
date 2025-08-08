import { useState } from "react"

function App() {
   
   const [a, set_a] = useState(0)
   const [z, set_z] = useState(0)
 
   function plus1()
  {    
    let b = a + 1
    set_a(b)  
  }
  
   function plus2()
  {    
    set_z(z+1)
  }
    function h1()
    {
      alert('안녕')
    }
    function r1()
    {
      alert('바보')
    }
  return (
    <>
    <button onClick={plus1}>숫자 : {a}</button><br /><br />

    <button onClick={h1}>랜디</button><br /><br />

    <button onClick={r1}>홍길동</button><br /><br />
    
    <button onClick={plus2}>숫자 : {z}</button>
    </>
  )
}

export default App
