import React from "react";
import App from "./Components/App";
import { createRoot } from 'react-dom/client';
const webapplication=document.querySelector('#root')
const root=createRoot(webapplication)
root.render( <App />);
