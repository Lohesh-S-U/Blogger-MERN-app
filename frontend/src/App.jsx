import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'

function App(){
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <div className="pages">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/signup' element={<SignUp/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App