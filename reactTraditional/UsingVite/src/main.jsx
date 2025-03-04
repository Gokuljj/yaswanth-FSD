import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Main from './components/Main.jsx'
import Footer from './components/footer.jsx'
import NavBars from './components/NavBars.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Main />
    <Footer />
    <NavBars />
  </StrictMode>,
)
