import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { WorkoutContextProvider } from './Context/WorkoutContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <WorkoutContextProvider> */}
      <App />
    {/* </WorkoutContextProvider> */}
  </React.StrictMode>,
)
