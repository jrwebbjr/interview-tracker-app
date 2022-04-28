
import '../../../src/App.css';
import { Route, Routes } from 'react-router-dom';
// import Home from "../home/Home";
import JobForm from "../../components/jobForm/JobForm";
// import Show from "../show/Show";
// import Edit from "../edit/Edit";
import Jobs from "../jobs/Jobs";
import ShowJob from '../showJob/ShowJob';
// import NavBar from '../../components/navBar.js/NavBar';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/form' element={<JobForm />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/jobs/:id' element={<ShowJob />} />
      </Routes>
    </main>
  );
}

export default App;

//TODO: set up ternary to show Home page if !user and jobs if user is signed in