import '../../../src/App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../authPage/AuthPage';
import DefaultLayout from '../layout/DefaultLayout';
import JobForm from "../../components/JobForm";
import Update from "../Update/Update";
import JobIndex from "../jobIndex/JobIndex";
import ShowJob from '../showJob/ShowJob';
import Delete from '../delete/Delete';


function App() {
  const [user, setUser] = useState(getUser());
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
      
      { user ?
        <>
          <Routes>
            <Route path='/new' element={<JobForm user={user} setUser={setUser} />} />
            <Route path='/update/:id' element={<Update user={user} setUser={setUser} />}  />
            <Route path='/index' element={<JobIndex user={user} setUser={setUser} />}  />
            <Route path='/' element={<AuthPage user={user} setUser={setUser} />}  />
            <Route path='/:id' element={<ShowJob user={user} setUser={setUser} />}  />
            <Route path='/delete/:id' element={<Delete user={user} setUser={setUser} />}  />
          </Routes> 
        </>
          :
          <AuthPage setUser={setUser} />
          }         
    </main>
  );
}

export default App;

//TODO: set up ternary to show Home page if !user and jobs if user is signed in