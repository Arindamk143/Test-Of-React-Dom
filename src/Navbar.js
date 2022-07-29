import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Test For Navigation</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" to="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/code">coding</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/love">Love</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/etc">etc</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
