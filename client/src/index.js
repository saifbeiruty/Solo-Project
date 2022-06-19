import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { createRoot } from 'react-dom/client';

const appElement = document.getElementById('app');

createRoot(appElement).render(< App />);