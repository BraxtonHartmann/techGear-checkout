import "./Card.css";

function Card(props){
    return <div className="cardBox">{props.children}</div>;
}

export default Card;