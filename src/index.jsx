import React from 'react';
import {createRoot} from "react-dom/client";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}> 
        <App/>
    </BrowserRouter>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();