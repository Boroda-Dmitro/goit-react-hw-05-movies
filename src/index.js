
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <App />
    </BrowserRouter>
  </React.StrictMode>
);



//  https://api.themoviedb.org/3/trending/all/day?api_key=efcd079eaa7382b8a49b8fa3c0261e85