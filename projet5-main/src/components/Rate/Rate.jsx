import starEmpty from "../../assets/Vector_empty.png";
import starFull from "../../assets/Vector_fullStar.png";
import "./Rate.scss"

function Rating({ rating }) {
    return (
        <div>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= rating ? starFull : starEmpty} alt="star" />
                )
            })}
        </div>
    );
}

export default Rating;
