import CoffeeCard from "./CoffeeCard";

const CoffeeCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
       <CoffeeCard/>
       <CoffeeCard/>
    </div>
  );
};

export default CoffeeCards;