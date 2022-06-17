import './App.css';

import React, { useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API1
 
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
           
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" key="general" category="general" />}></Route>
          <Route exact path="/Home" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" key="general" category="general" />}></Route>
          <Route exact path="/Business" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" key="business" category="business" />}></Route>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" key="entertainment" category="entertainment" />}></Route>
          <Route exact path="/Health" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" key="health" category="health" />}></Route>
          <Route exact path="/Science" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" key="science" category="science" />}></Route>
          <Route exact path="/Sports" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" key="sports" category="sports" />}></Route>
          <Route exact path="/General" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" key="general" category="general" />}></Route>
          <Route exact path="/Technology" element={<News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" key="technology" category="technology" />}></Route>
        </Routes>

      </Router>
    </div>
  )
}
  export default App;