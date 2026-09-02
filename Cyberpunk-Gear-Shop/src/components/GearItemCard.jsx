import Card from "./Card";
import PriceTag from "./PriceTag";

function GearItemCard(props) {
    var name = props.name;
    var category = props.category;
    var description = props.description;
    var base = props.basePrice;

    return (
        <Card>
            <h3>{name}</h3>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
            <PriceTag base = {base}/>
        </Card>
    );
}

export default GearItemCard;


// Create a component named GearItemCard.jsx that accepts item props 
// (i.e., name, category, description, basePrice).
// Wrap its content inside your <Card> container shell component.
// Forward the basePrice property into your sub-component <PriceTag />