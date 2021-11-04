import './App.css';
import restaurant from "./restaurant.jpg";

function Header(props){
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props){
  return(
    <section>
      <p>We serve the most {props.adjective} food around.</p>

      <img 
        src={restaurant} 
        height={200} 
        alt="Chicken plate at a restaurant table" 
      />

      <ul style = {{textAlign: "center"}}>
        {props.dishes.map((dish) => 
          <li key={dish.id}> {dish.title} </li>)}
      </ul>      
    </section>
  )
}

function Footer(props){
  return(
    <section>
      <p>Copyright {props.year}</p>
    </section>
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with vegetables",
  "Minestrone"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish}))

function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
