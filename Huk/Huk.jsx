import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from './page/Page1'
import { useState,useEffect } from 'react';
import React from "react";
import Page2 from './page/Page2'
import Page3 from './page/Page3'

 function Huk(){
  return(<div>
    <Router>
    <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
    </Routes>
    </Router>

  </div>
  )
}

export default Huk


