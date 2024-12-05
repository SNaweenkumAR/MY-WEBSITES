

import React from 'react';
import Navbar from './Component/Navbar/Navbar'
import About from  './Component/About/About'
import Hero from './Component/Hero/Hero'
import Services from './Component/Services/Services'
import MyWork  from './Component/MyWork/MyWork'

function App() {
  return (
<div>
  <Navbar/>
  <Hero/>
  <About/>
  <Services/>
  <MyWork/>
</div>    
    
  );
}

export default App;
