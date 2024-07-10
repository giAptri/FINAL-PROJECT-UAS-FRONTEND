import Global from "./pages/Word/word";
import Indonesiaa from "./pages/Indonesia/indonesia";
import Provincee from "./pages/Province/province";
import Aboutt from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import CovidIDContext from "./Context";
import data from "./utils/constants/provinces";
import { useState } from "react";




export default function App() {
    const [ProvinsiData,SetProvinsi] = useState(data);
    const contextValue = {
      ProvinsiData,
      SetProvinsi,
    };


  return (
    <CovidIDContext.Provider value={contextValue}>
    <Layout>
      <Routes>
        <Route path="/" element={<Global />} />
        <Route path="Pages/Global" element={<Global />} />
        <Route path="Pages/Indonesia" element={<Indonesiaa />} />
        <Route path="Pages/Provinsi" element={<Provincee />} />
        <Route path="Pages/About" element={<Aboutt />} />
      </Routes>
    </Layout>
    </CovidIDContext.Provider>
  );
}


