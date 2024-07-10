import Hero from "../../components/Hero/Hero";
import KartuGlobal from "../../components/Kartu/KartuGlobal";
import Indonesia from "../../components/Indonesia/Indonesia";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Global() {
    const [Cards, setCards] = useState([]);
    const [CardsRegion, setCardsRegion] = useState([]);
    const URL = `https://covid-fe-2023.vercel.app/api/global.json`;

    

    async function DataGlobal(){
    const response =  await axios(URL);
    setCards(response.data.global);
    setCardsRegion(response.data.regions);
    }

    useEffect(() => {
        DataGlobal();
    });


    return (
        <div>
        <main> 
            <Hero />
            <Indonesia Cards={Cards}/>
            <KartuGlobal CardsRegion={CardsRegion} />
        </main>
        </div>
    );
    }
