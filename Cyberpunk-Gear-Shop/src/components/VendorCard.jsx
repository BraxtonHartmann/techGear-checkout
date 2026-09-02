import Card from "./Card";

function VendorCard(props) {
    return (
        <Card>
            <h3>{props.vendorName}</h3>
            <p>Location: {props.location}</p>
        </Card>
    )
}

export default VendorCard;

  // To demonstrate container reusability via composition, create a VendorCard.jsx
//    component that also wraps its contents inside your <Card> shell. 
// It should accept props for vendorName and location.

