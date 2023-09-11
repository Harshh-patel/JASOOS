import React/* , { Component } */ from 'react'
import loading from './loading.gif'

const Spinner=()=>{
    return (
      <div className='text-center p-3 my-3'>
        <img src={loading} alt="loading"  />
      </div>
    )
  }


export default Spinner
