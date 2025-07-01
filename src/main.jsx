import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bootstrap from './cdn.jsx'
import Bttable from './cdnnav.jsx'
import Ajith from './myprofile.jsx'
import Development from './about.jsx'
import Properties from './properties.jsx'
import Mystate from './Mystate.jsx'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
      {/* <Ajith/>
      <Development/>
       < Bootstrap/>
      <Bttable/>
      <Properties/> */}
      <Mystate/>
  </StrictMode>,
)

