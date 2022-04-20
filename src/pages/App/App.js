
import '../../../src/App.css';
import Home from "../Home/Home";
import LogForm from "../../components/LogForm/LogForm";
import Show from "../Show/Show";
import Edit from "../Edit/Edit";
import NavBar from '../../components/NavBar.js/NavBar';

function App() {
  return (
    <main className="App">
      <NavBar />
      <LogForm />
      <Home />
      <Show />
      <Edit />
    </main>
  );
}

export default App;
