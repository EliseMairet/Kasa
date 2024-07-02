import React from "react";
import "./ApartmentGrid.scss";
import { Link } from "react-router-dom";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import apartments from '../../../logement.json';

function ApartmentGrid() {
    return (
        <div className="grid">
            {apartments.map((apartment) => {
                return (
                    <article key={apartment.id}>
                        <Link to={`/rentalSheet/${apartment.id}`}>
                            <ApartmentCard image={apartment.cover} title={apartment.title} />
                        </Link>
                    </article>
                )
        })}
        </div>
    )
}

export default ApartmentGrid;