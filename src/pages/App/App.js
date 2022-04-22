
import '../../../src/App.css';
import Home from "../home/Home";
import LogForm from "../../components/logForm/LogForm";
import Show from "../show/Show";
import Edit from "../edit/Edit";
import NavBar from '../../components/navBar.js/NavBar';

function App() {
  return (
    <main className="App">
      <NavBar />
      <LogForm />
    </main>
  );
}

export default App;
