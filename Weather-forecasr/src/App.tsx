
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import LoginMain from './components/LoginMain'
import MainPage from './components/MainPage'
import { RecoilRoot } from 'recoil'
import Dashboard from './components/Dashboard'

function App() {
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element = {<RecoilRoot><LoginMain /></RecoilRoot>}  />
      <Route path = "/weather" element = {<RecoilRoot><MainPage /></RecoilRoot>} />
      <Route path = "/weather/main" element = {<RecoilRoot><Dashboard/></RecoilRoot>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
