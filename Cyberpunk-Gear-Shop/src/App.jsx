import GearItemCard from "./components/GearItemCard";
import VendorCard from "./components/VendorCard";
function App() {
  const shopInventory = [
    {
      id: "g1",
      name: "Neural Link Processor",
      category: "Cyberware",
      description: "Boosts reaction time and memory bandwidth.",
      basePrice: 1200
    },
    {
      id: "g2",
      name: "Thermal Katana",
      category: "Weapons",
      description: "Plasma-heated blade for cutting armor.",
      basePrice: 850
    },
    {
      id: "g3",
      name: "Optical Camo Cloak",
      category: "Apparel",
      description: "Renders user semi-invisible to security sensors.",
      basePrice: 2100
    }
  ];




  return (
    <div>
      <h1>Shop</h1>
      <VendorCard
        vendorName = "Walmart"
        location =  "Holo-Street, Brass Line District"
      />

      <h1>Item Selection</h1>
      {
        shopInventory.map((item) => (
          <GearItemCard
            key={item.id}
            name={item.name}
            category={item.category}
            description={item.description}
            basePrice={item.basePrice}
          />
        ))
      }
    </div>
  );
  // In App.jsx:
  // Render an overall main header for the store.
  // Render a single <VendorCard /> at the top of the interface.
  // Use shopInventory.map() to dynamically render a list of <GearItemCard /> elements from your dataset. 
  // Ensure each rendered list item includes a unique, stable key prop (i.e., key={item.id}).

}

export default App;