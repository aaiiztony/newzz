import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center d-flex justify-content-center align-items-center">
    <div className="spinner-grow text-danger" role="status">
    <span className="sr-only"></span>
    </div>
    <div className="spinner-grow text-warning" role="status">
    <span className="sr-only"></span>
    </div>
    <div className="spinner-grow text-info" role="status">
    <span className="sr-only"></span>
    </div>
    </div>
    )
  }
}
