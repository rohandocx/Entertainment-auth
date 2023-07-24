import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.css";

function Home(props) {
  return (
    
       <div style={{ 
      backgroundImage: `url("https://variety.com/wp-content/uploads/2022/12/WB100_Bugs.jpg?w=1000&h=563&crop=1&resize=1000%2C563)`, 
      backgroundRepeat: 'no-repeat',
      width:'250px' 
    }}>
      <div>
      <button className = "button button1 " type="submit">
        
      <Link to="/signup">SIGNUP</Link>
        </button>
        <button className = "button  button2" type="submit">
      <Link to="/login">LOGIN</Link>
        </button>
     
      </div>
      
    </div>
  );
}

export default Home;
