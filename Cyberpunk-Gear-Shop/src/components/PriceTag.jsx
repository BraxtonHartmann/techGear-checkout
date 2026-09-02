function PriceTag(props){
    var base = props.base;
    var taxed = base*1.15;
    return(
        <div>
            <p>Base price: ${(base).toFixed(2)}</p>
            <p>Total: ${(taxed).toFixed(2)}</p>
        </div>
    );
}
export default PriceTag;

// Create a sub-component named PriceTag.jsx. It must accept a basePrice 
// prop and perform an inline JavaScript dynamic expression: calculate a 
// 15% city trade tax (basePrice * 1.15). Render both the raw base price and the calculated final price.
