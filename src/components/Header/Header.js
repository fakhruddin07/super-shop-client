import { Link } from 'react-router-dom';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseConfig from '../Login/firebase.config';

const Header = () => {
    var user = firebase.auth().currentUser;
    if (!firebase.app.length) {
        firebase.initializeApp(firebaseConfig)
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link to="/home"><a class="nav-link active" aria-current="page" href="#"><h3>BIG BAZAR</h3></a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/home"><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/order"><a class="nav-link active" href="/order">Orders</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/admin"><a class="nav-link active" href="/admin">Admin</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/home"><a class="nav-link active" href="#">Deals</a></Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            {
                                user ? <span class={{color: "green"}}>{user.displayName}</span> : <Link to="/login"><button class="btn btn-success" type="submit">Login</button></Link>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;