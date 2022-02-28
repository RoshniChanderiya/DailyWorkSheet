import React from 'react'

type HomeProps = {
    name ?:string
    age : number
    status ?: 'coder' | 'developer' | 'designer' 
    children ?:React.ReactNode
}

const Home = ({name,age,status,children}:HomeProps) => {
  return (
    <div style={{border: "2px solid black", margin:"2px"}}>
        <h2>name - {name || "User"} </h2>
        <h3>Age - {age}</h3>
        <h3>Status - {status}</h3>
        <h2>{children}</h2>
        {/* <h3>Status - {props.status}</h3> */}
    </div>
  )
}

export default Home;