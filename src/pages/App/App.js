import '../../../src/App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from '../authPage/AuthPage';
import DefaultLayout from '../layout/DefaultLayout';
import JobForm from "../../components/JobForm";
import Update from "../Update/Update";
import JobIndex from "../jobIndex/JobIndex";
import ShowJob from '../showJob/ShowJob';

function App() {
  // const [user, setUser] = useState(null);
  // const Navigate = useNavigate();

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const [jobs, setJobs] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [currentPage, setCurrentPage] = useState(1);
  // const [jobsPerPage] = useState(8);

  // const fetchJobs = async() => {
  //     setLoading(true);
  //     const res = await axios.get('/api/jobs/')
  //     setJobs(res.data)
  //     console.log(res.data)
  //     setLoading(false);
  // }

  // useEffect(() => {
  //     fetchJobs()
  // }, []) 
  // //Get Current Jobs - shows the '8' current jobs on the page at a time
  // const indexOfLastJob = currentPage * jobsPerPage;
  // const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  // const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <main className='m-0 border-2 p-20 bg-gray-200'>
      <DefaultLayout />
      {
        user ?
      <Routes>
        <Route path='/new' element={<JobForm />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/index' element={<JobIndex />} />
        <Route path='/' element={<AuthPage />} />
        <Route path='/:id' element={<ShowJob />} />
      </Routes> :
      <AuthPage />
      }         
    </main>
  );
}

export default App;

//TODO: set up ternary to show Home page if !user and jobs if user is signed in