import "./App.css";
import {Header} from "./component/Header/Header";
import Table from "./component/Table/Table";

function App() {
  return (
    <div className="App">
      <div className="mx-5 mt-3 ">
        <Header />
        <Table />
      </div>
    </div>
  );
}

export default App;
