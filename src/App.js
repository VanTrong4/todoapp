import "./App.css";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Heading from "./component/Heading";
import Logo from "./component/Logo";
import SideBar from "./component/SideBar";

function App() {
  return (
    <div className="App">
      <div className="col-left">
        <SideBar />
      </div>
      <div className="col-right">
        <Logo />
        <Heading />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
