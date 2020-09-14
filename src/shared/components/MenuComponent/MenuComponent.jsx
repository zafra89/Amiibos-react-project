import React from 'react';
import {Link} from "react-router-dom";
import './MenuComponent.scss';

export default function MenuComponent() {

    return (
        <nav className="c-navbar_menu">
            <ul className="row">
                <li className="col-lg-3 col-md-6 col-sm-12 c-li_menu">
                    <Link to="/" className="routerLink">Home</Link>
                </li>
                <li className="col-lg-3 col-md-6 col-sm-12 c-li_menu">
                    <Link to="/amiibos" className="routerLink">Amiibos</Link>
                </li>
                <li className="col-lg-3 col-md-6 col-sm-12 c-li_menu">
                    <Link to="/gameseries" className="routerLink">GameSeries</Link>
                </li>
                <li className="col-lg-3 col-md-6 col-sm-12 c-li_menu">
                    <Link to="/contact" className="routerLink">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
