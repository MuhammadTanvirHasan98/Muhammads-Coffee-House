import Header from "./Header/Header";
import CoffeeCards from "./Others/CoffeeCards";


const Home = () => {
  return (
    <div>
       <Header/>
       <div className="bg-[url('https://i.ibb.co/PMz19rd/Card-Banner-BG.png')] bg-cover bg-center object-cover bg-no-repeat h-[700px]">
         <CoffeeCards/>
       </div>
      
    </div>
  );
};

export default Home;