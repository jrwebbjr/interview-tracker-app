
import '../../../src/App.css';
import Home from "../home/Home";
import JobForm from "../../components/jobForm/JobForm";
// import Show from "../show/Show";
// import Edit from "../edit/Edit";
import NavBar from '../../components/navBar.js/NavBar';

function App() {
  return (
    <main className="App">
      <NavBar />
      <JobForm />
    </main>
  );
}

export default App;

//TODO: set up ternary to show Home page if !user and jobs if user is signed in