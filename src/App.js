import React from "react";
import Navbar from "./components/Header/Navbar/Navbar";
import Main from "./components/Body/Main/Main";
import Footer from "./components/Footer/Footer/Footer";

let titulos = ['ADMIN', 'Pages', 'Charts', 'Tables'];

function App() {
  return (
    <div className="App">
      <Navbar user={{nombre : 'Walter White', foto : "./user.jpg"}} titulos={titulos}/>
      <h1>My App in React</h1>
      <Main/>
      <Footer/>
 
    </div>
  );
}

export default App;
