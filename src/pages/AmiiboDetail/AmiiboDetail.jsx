import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function AmiiboDetail() {

    const tail = useParams().tail;
    const [amiiboDetail, setAmiiboDetail] = useState({});

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + "amiibo/?tail=" + tail )
            .then(res => {
                const amiibo = res.data.amiibo[0];
                console.log(res.data)
                setAmiiboDetail(amiibo);
            })
    }, [])

    return (
        <div className="">
            <figure>
                <img src={amiiboDetail.image}/>
                    <figcaption>
                        <h1>Name: {amiiboDetail.name}</h1>
                        <h3>Game Series: {amiiboDetail.gameSeries}</h3>
                        <h3>Type: {amiiboDetail.type}</h3>
                    </figcaption>
            </figure>
        </div>
    );
}
