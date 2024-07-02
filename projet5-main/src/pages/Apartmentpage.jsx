import React from 'react';
import "./Apartmentpage.scss";
import Caroussel from "../components/caroussel/caroussel";
import logements from "../../logement.json";
import equipements from "../../logement.json";
import ratings from "../../logement.json";
import Rate from "../components/Rate/Rate";
import {useParams} from "react-router-dom";
import Collapse from "../components/collapse/collapse";

function Apartmentpage() {
    const {id} = useParams();
    const ficheLogement = logements.find((logement) => logement.id === id);
    const ficheEquipement = equipements.find((equipement) => equipement.id === id);
    const ficheRating = ratings.find((rating) => rating.id === id);

    return (
        <div className='apartment-page'>
            <Caroussel images={ficheLogement.pictures}/>
            <h3 className="title">{ficheLogement.title}</h3>
            <h4 className='location'>{ficheLogement.location}</h4>
            <div className='tags'>
                {ficheLogement.tags.map((tag, index) => (
                    <span key={index} className='tag'>{tag}</span>
                ))}
            </div>
            <div className='host'>
                <img src={ficheLogement.host.picture} alt={ficheLogement.host.name} className='host-picture'/>
                <p>{ficheLogement.host.name}</p>
            </div>
            <div className='rate'>
                <Rate score={ficheRating.rating}/>
            </div>
            <Collapse title="Description" content={ficheLogement.description}/>
            <Collapse title="Equipements" content={ficheEquipement.equipments}/>
        </div>
    );
}

export default Apartmentpage;
