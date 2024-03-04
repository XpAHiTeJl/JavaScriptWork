import { Header, Footer, Button, Input } from "./components";
import { SubHeader } from "./components/SubHeader";
import { FINAL_BUTTONS, MoreLinks } from "./constants";

import "./App.css";

function App() {
  return (
    <>
      <Header FINAL_BUTTONS={FINAL_BUTTONS}></Header>
      <SubHeader MoreLinks={MoreLinks}></SubHeader>
      <Footer>All Reserv</Footer>
    </>
  );
}

export default App;
