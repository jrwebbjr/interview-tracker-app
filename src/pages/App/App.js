
import '../../../src/App.css';
import Home from "../Home/Home";
import LogForm from "../../components/LogForm/LogForm";
import Show from "../Show/Show";
import Edit from "../Edit/Edit";

function App() {
  return (
    <main className="App">
      <LogForm />
      <Home />
      <Show />
    </main>
  );
}

export default App;
