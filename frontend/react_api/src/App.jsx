import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import  Djangoapp from "./Djangoapp.jsx";
import  ProductForm  from "./ProductForm.jsx";

function App() {
  

  return (
    <>
      <Djangoapp/>
      <ProductForm/>
    </>
  )
}

export default App;
