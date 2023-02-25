import Navbar from './MyComponents/Navbar';
import React, { Component } from 'react'
import NewsCont from './MyComponents/NewsCont';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

export default class App extends Component {
  pageSize=6;
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<NewsCont key="general" pageSize={this.pageSize} category="general"/>}/>
        <Route exact path="/politics" element={<NewsCont key="politics" pageSize={this.pageSize} category="politics"/>}/>
        <Route exact path="/technology" element={<NewsCont key="technology" pageSize={this.pageSize} category="technology"/>}/>
        <Route exact path="/business" element={<NewsCont key="business" pageSize={this.pageSize} category="business"/>}/>
        <Route exact path="/entertainment" element={<NewsCont key="entertainment" pageSize={this.pageSize} category="entertainment"/>}/>
        <Route exact path="/health" element={<NewsCont key="health" pageSize={this.pageSize} category="health"/>}/>
        <Route exact path="/science" element={<NewsCont key="science" pageSize={this.pageSize} category="science"/>}/>
        <Route exact path="/sports" element={<NewsCont key="sports" pageSize={this.pageSize} category="sports"/>}/>
        </Routes>
      </div>
    )
  }
}

