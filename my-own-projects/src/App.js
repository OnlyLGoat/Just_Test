import './App.css';
import Dashbord from './Composent/D14-PJCT-001/dashbord';
import Stats from './Composent/D14-PJCT-001/stats';
import './styling/bootstrap.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Users from './Composent/D14-PJCT-001/users';

function App() {
  let [users, setUsers] = useState([])
  useEffect(() => {axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data))}, [])
  return (
    <>
      <BrowserRouter>
        <nav className='navbar row'>
          <Link to="/"><h3 className='col-6'>PJCT 001</h3></Link>
          <div className='col-6'>
            <Link to="/Home" className='btn btn-outline-primary col-3 m-2'>Home</Link>
            <Link to="/Stats" className='btn btn-outline-primary col-3 m-2 p-2'>Statments</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/Home" element={<Dashbord />}></Route>
          <Route path="/Stats" element={<Stats data_us = {users}/>}></Route>
          <Route path="/users/:id" element={<Users data_us={users} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
