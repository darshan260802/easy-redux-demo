import { useSelector } from 'react-redux';
import './Navbar.css';
import {Link} from "react-router-dom";

export default function Navbar() {

    const user = useSelector(state => state.user);

    return <div className={'navbar-container'}>
        <div className={'left'}>
            <h1>Easy Redux Demo</h1>
            <h2>{user.name}</h2>
        </div>

        <div className={'right'}>
            <Link to={'/profile'}> <span>Profile</span> </Link>
            <Link to={'/form'}> <span>Form</span> </Link>
        </div>
    </div>
}