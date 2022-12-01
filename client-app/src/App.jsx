import LoginApp from './LoginApp'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeApp from './HomeApp';
import CreateApp from './CreateApp';
import RegisterApp from './RegisterApp';
import UpldateApp from './UpldateApp';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginApp/>} exact/>
          <Route path='/register' element={<RegisterApp/>} exact/>
          <Route path='/home' element={<HomeApp/>} exact/>
          <Route path='/create-order' element={<CreateApp/>} exact/>
          <Route path='/update-order' element={<UpldateApp/>} exact/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
