import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import styled from "styled-components";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import './App.css';

import { Landing } from "./components/landing";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse: ''}
  }

  callAPI(){
    fetch('http://localhost:9000')
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res}))
        .catch(err => err)
  }

  componentWillMount(){
    //this.callAPI();
  }

  render(){
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing/>} />
          </Routes>

        </BrowserRouter>
    );
  }
}

export default App;

