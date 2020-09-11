import React, {useEffect, useState} from 'react';
import axios from "axios";
import AmiibosGallery from "./AmiibosGallery/AmiibosGallery";

export default function AmiibosPage() {
    const [localAmiibos, setLocalAmiibos] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'amiibo')
            .then(res => {
                console.log(res.data)
                setLocalAmiibos(res.data.amiibo);
            })
    }, [])

    return (
        <div>
            <AmiibosGallery amiibos={localAmiibos}/>
        </div>
    )
}
