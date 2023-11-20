import "./App.css";
import { Apropos } from "./Component/Apropos";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Message from "./Component/Message";
import { Navbar } from "./Component/Navbar";
import Shoes from "./Component/Shoes";
import Testimonial from "./Component/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
    <Navbar></Navbar>
      {/* <Body></Body> */}
      <Shoes></Shoes>
      <Testimonial></Testimonial>
      <Message></Message>
      <Footer/>
    </div>
  );
}

export default App;
