import Hero from "../../components/Hero/Hero";
import Indonesia from "../../components/Indonesia/Indonesia";
import Province from "../../components/TableProvinsi/provinceApi";
import { useState,useEffect } from "react";
import axios from "axios";



export default function IndonesiaPage() {
    const URL = `https://covid-fe-2023.vercel.app/api/indonesia.json`;
    const [Cards , setCards] = useState([]);
    const [CardsRegion, setCardsRegion] = useState([]);

    

    async function DataIndonesia(){
    const response =  await axios(URL);
    setCards(response.data.indonesia);
    setCardsRegion(response.data.regions);
    }

    useEffect(() => {
        DataIndonesia();
    });

    return (
        <div>
        <main> 
            <Hero />
            <Indonesia Cards={Cards} title="Indonesia" subtitle="Berikut Informasi Mengenai Data Covid Yang ada Di Indonesia"/>
            <Province CardsRegion={CardsRegion} setRegionsData={setCardsRegion} />
        </main>
        </div>
    );
}



