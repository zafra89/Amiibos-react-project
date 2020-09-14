import React, {useEffect, useState} from 'react';
import axios from "axios";
import AmiibosGallery from "./AmiibosGallery/AmiibosGallery";
import SearchForm from "../../shared/components/SearchForm/SearchForm";

let amiibos = [];

export default function AmiibosPage() {

    const [localAmiibos, setLocalAmiibos] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'amiibo')
            .then(res => {
                console.log(res.data)
                amiibos = res.data.amiibo;
                setLocalAmiibos(amiibos);


            })
    }, [])

    const filterAmiibos = (values) => {
        const filteredAmiibos = [];
        for (const amiibo of amiibos) {
            if (amiibo.name.includes(values.name)) {
                filteredAmiibos.push(amiibo)
            }
        }
        setLocalAmiibos(filteredAmiibos)
    }

    return (
        <div>
            <SearchForm fnSubmit={filterAmiibos}/>
            <AmiibosGallery amiibos={localAmiibos}/>
        </div>
    )
}
