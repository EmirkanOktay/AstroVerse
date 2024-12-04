import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Store from './Redux/Store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import Router from './Router/Router.tsx'

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Provider store={Store}>
      <App />
      <Router />
    </Provider>
  </BrowserRouter>

)
