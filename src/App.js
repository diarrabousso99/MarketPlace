import React from "react";

import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Message from "./Component/Message";
import { Navbar } from "./Component/Navbar";
import Shoes from "./Component/Shoes";
import Testimonial from "./Component/Testimonial";
import { Order } from "./Component/Order";
import { useAuth } from "./Component/Auth";

function App() {
  const auth = useAuth();
  const urlApi = auth.endpoint+"/produits";

  return (
    <div className="App">
      <Header />

      <Navbar></Navbar>

      <Shoes urlApi={urlApi}></Shoes>
      <Testimonial></Testimonial>
      <Message></Message>
      <Footer />
    </div>
  );
}

export default App;
