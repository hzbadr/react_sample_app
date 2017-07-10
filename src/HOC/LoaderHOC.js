// Higher Order Component

import React, { Component } from 'react';
import './LoaderHOC.css'


const LoaderHOC = (propName) => (WrappedComponent) => {
  return class LoaderHOC extends Component{
    render(){
      return this.props[propName].length === 0 ? <div className='loader'>Loading...</div> : <WrappedComponent {... this.props} />
    }
  }
}


export default LoaderHOC;
