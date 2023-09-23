import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle ={
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
        
    }
    return (
        <div style={userStyle}>
            <h2> {name}</h2>
            <p>Email: {email}</p>
            {/* <h2>id: {id}</h2> */}
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`} >Show Details</Link>
            <Link to={`/user/${id}`}></Link>
                <button>Click</button>

        </div>
    );
};

export default User;