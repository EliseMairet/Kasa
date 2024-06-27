import React from "react";
import Banner from "../components/Banner/Banner";
import bannerImage from '../assets/image1.png'
import ApartmentGrid from "../components/ApartmentGrid/ApartmentGrid";

function Homepage() {
    return (
        <main>
            <Banner image={bannerImage} text="Chez vous, partout et ailleurs" alt="Falaises" />
            <ApartmentGrid/>
        </main>
    )
}

export default Homepage;