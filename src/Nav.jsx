import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignIn} from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-success ">
                <div className="container px-4 px-lg-5 text-light">
                    <a className="navbar-brand text-light fw-bold" href='#!'>MEGA WINTER SALE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ">
                            <li className="nav-item "><a className="nav-link active text-light" aria-current="page">Home</a></li>
                            <li className="nav-item"><a className="nav-link text-light">About</a></li>
                            <li className="nav-item"><a className="nav-link text-light">Shop</a></li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark fa" type="submit">
                            <FontAwesomeIcon icon={faSignIn} /> 
                            <span classNameName='ms-2 text-light'> Sign In</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;