import "./card.scss";
import { Link } from "react-router-dom";

function Card({item}){
    return (
        <div className="card">
            <Link to={'/${item.id}'} className="imgcontainer">
             <img src={item.img} alt=""/>
            </Link>
            <div className="textcontainer">
                <h2 className="title">
                    <Link to={'/${item.id}'}>{item.title}</Link>
                </h2>
                <p className="address">
                    <img src="" alt="" />
                </p>
            </div>
        </div>
    );
}

export default Card;