import React from 'react';
import './AmiibosGallery.scss';

export default function AmiibosGallery(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                {props.amiibos.map((amiibo, i) =>
                    <div className="col-lg-4 col-md-6 col-sm-12 c_amiibo" key={i}>
                        <figure className="c-figure_amiibo">
                            <img className="c-img_amiibo" src={amiibo.image} alt=""/>
                            <figcaption>
                                <h3 className="c-name_amiibo">Name: {amiibo.name}</h3>
                            </figcaption>
                        </figure>
                    </div>
                )}
            </div>
        </div>
    )
}
