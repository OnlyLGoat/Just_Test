import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Dashbord(){
    let [users, setUsers] = useState([])
    let [searchName, setSearchName] = useState('')

    // Import my Data from the API and put it in users Array
    useEffect(() => {axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data))}, [])
    return(
        <>
            {/* Searching Feature */}
            <div className="serching-feature mb-5 mt-4">
                <input type="text" onChange={el => setSearchName(el.target.value)} placeholder="Searching ..."/> <br /><br />
                {console.log(searchName)}
            </div>
            {
                searchName ? 
                    // display a specify user info with a button in a div
                    users.filter(el => searchName === el.name).map(el => (
                        <div className=" card box-of-user w-50" key={el.id} >
                            <h5 className="card-header">User Id: {el.id}</h5>
                            <div className="card-body">
                                <p>Name: {el.name}</p>
                                <p>Email: {el.email}</p>
                                <p>City: {el.address.city}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={`/users/${el.id}`}>
                                    <button>View detail</button>
                                </Link> 
                            </div>
                        </div>
                    ))
                :
                // display every user info with a button in a div
                users.map(el => (
                    <div className=" card box-of-users w-50 m-2" key={el.id} >
                        <h5 className="card-header">User Id: {el.id}</h5>
                        <div className="card-body">
                            <p>Name: {el.name}</p>
                            <p>Email: {el.email}</p>
                            <p>City: {el.address.city}</p>
                        </div>
                        <div className="card-footer">
                            <Link to={`/users/${el.id}`}>
                                <button className="btn btn-outline-primary">View detail</button>
                            </Link> 
                        </div>
                    </div>
                ))
            }
        </>
    )
}