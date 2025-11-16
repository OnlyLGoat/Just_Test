import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

export default function Users(props){
    const {id} = useParams();
    const user = props.data_us.find(us => us.id === parseFloat(id))
    return(
        <div className="container-fluid">
            {/* Display Our User Infos */}
            {
                user ? (
                    <div className="m-5">
                        <h5>Personal Info</h5>
                        <p cla>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>City: {user.address.city}</p>
                        <p>Phone: {user.phone}</p>
                        <h5>Company</h5>
                        <p>Name: {user.company.name}</p>
                        <h5>Info</h5>
                        <p>Website: {user.website}</p>
                    </div>
                ) : (
                    <p>User Invalidd</p>
                )
            }
            <Link to='/Home'><button>Back to home</button></Link>
        </div>
    )
}