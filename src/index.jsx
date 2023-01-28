import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(
    <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
]        
        </Routes>
    </Router>,
  document.getElementById('root')
);

