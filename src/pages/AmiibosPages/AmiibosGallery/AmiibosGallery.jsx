import React from 'react';
import './AmiibosGallery.scss';
import {BrowserRouter as Router, Link} from "react-router-dom";

export default function AmiibosGallery(props) {

    return (
        <div className="container-fluid">
            <div className="row">
                {props.amiibos.map((amiibo, i) =>
                    <Link to={`amiibos/${amiibo.tail}`} className="col-lg-4 col-md-6 col-sm-12 c_amiibo" key={i}
                          style={{ textDecoration: 'none' }}>
                        <figure className="c-figure_amiibo">
                            <img className="c-img_amiibo" src={amiibo.image} alt=""/>
                            <figcaption>
                                <h3 className="c-name_amiibo">Name: {amiibo.name}</h3>
                            </figcaption>
                        </figure>
                    </Link>
                )}
            </div>
        </div>
    )
}
