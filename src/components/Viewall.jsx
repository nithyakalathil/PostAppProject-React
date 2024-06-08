import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {

    const [data,changedata]=useState([] )

const featchdata=()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts").then(


(response)=>{
  console.log(response.data)
  changedata(response.data)}

  ).catch()
}

useEffect(()=>{featchdata()},[])

  return (
    <div>
<Navbar/>

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">useid</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
   {data.map((value,index)=>{return  <tr>
      <td scope="row">{value.userId}</td>
      <td>{value.id}</td>
      <td>{value.title}</td>
      <td>{value.body}</td>
    </tr>})}
   
  </tbody>
</table>

            
        </div>
    </div>
</div>

    </div>
  )
}

export default Viewall