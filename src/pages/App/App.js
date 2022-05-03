
import '../../../src/App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout';
// import Home from "../home/Home";
import JobForm from "../../components/JobForm";
import Update from "../Update/Update";
// import Show from "../show/Show";
// import Edit from "../edit/Edit";
import Jobs from "../jobIndex/JobIndex";
import ShowJob from '../showJob/ShowJob';

function App({ jobs, loading }) {

  const Navigate = useNavigate();

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchJobs = async() => {
      setLoading(true);
      const res = await axios.get('/api/jobs/')
      setJobs(res.data)
      setLoading(false);
  }

  useEffect(() => {
      fetchJobs()
  }, []) 

  return (
    <main className='m-0 border-2 p-20 bg-gray-200'>
      <Routes>
        <Route path='/form' element={<JobForm />} />
        <Route path='/jobs/:id/update' element={<Update />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/jobs/:id' element={<ShowJob />} />
      </Routes>
    </main>
  );
}

export default App;

//TODO: set up ternary to show Home page if !user and jobs if user is signed in