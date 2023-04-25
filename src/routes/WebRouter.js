import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import First from "../page/First";
import Second from "../page/Second";

function WebRouter() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<First/>} />
          <Route path='/truth' element={<Second/>} />
        </Routes>
      </Router>
    );
};
  
export default WebRouter;