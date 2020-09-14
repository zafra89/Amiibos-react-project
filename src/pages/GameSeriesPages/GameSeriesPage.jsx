import React, {useEffect, useState} from 'react';
import axios from "axios";
import GameSeriesComponent from "./GameSeriesComponent/GameSeriesComponent";
import './GameSeriesPage.scss';

export default function GameSeriesPage() {
    const [gameSeries, setGameSeries] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'gameseries')
            .then(res => {
                const filteredArray = uniqueArray(res.data.amiibo, 'name')
                setGameSeries(filteredArray);
            })
    }, [])

    return (
        <div>
            <GameSeriesComponent gameseries={gameSeries}/>
        </div>
    )
}

const uniqueArray = (array, key) => {
    return array.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t[key] === item[key]
        ))
    )
}
