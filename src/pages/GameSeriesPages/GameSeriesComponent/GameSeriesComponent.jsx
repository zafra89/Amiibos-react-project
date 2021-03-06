import React from 'react';
import './GameSeriesComponent.scss'
import {ParagraphStyles} from "../../../shared/Styles/ParagraphStyles";

export default function GameSeriesComponent(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                {props.gameseries.map((gameserie, i) =>
                    <div className="col-lg-4 col-md-6 col-sm-12 c_gameseries" key={i}>
                        <div className="c_gameseries_div">
                            <ParagraphStyles>{gameserie.name}</ParagraphStyles>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
