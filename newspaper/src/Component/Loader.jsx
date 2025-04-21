import React, { Component } from 'react'
import loader from './Ajax-loader.gif'
export default class Loader extends Component {
  render() {
    return (
      <div className='text-center my-5'>
        <img src={loader} alt="loader" />
      </div>
    )
  }
}
