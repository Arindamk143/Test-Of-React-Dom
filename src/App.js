import React from 'react'
import Navbar from './Navbar'
import loved from './love'
import etc from "./etc"
import code from "./coding"
import { HashRouter, Route } from "react-router-dom";
export default function App() {
  window.document.body.style.backgroundColor = "black"
  return (
    <HashRouter basename='/'>
      <div>
        <Navbar/>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/love" component={loved} />
        <Route path="/etc" component={etc} />
        <Route path="/code" component={code} />
      </div>
    </HashRouter>
  )
}
const loved = ()=><loved/>
const etc = ()=><etc/>
const code = ()=><code/>
const Home = ()=><Home/>



