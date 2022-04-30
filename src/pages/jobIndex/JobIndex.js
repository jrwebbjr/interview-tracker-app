import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Jobs from '../../components/Jobs';
import Pagination from '../../components/Pagination';

export default function JobIndex({ jobs }){

    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(4);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <>
            <div>
                <Jobs jobs={currentJobs} loading={loading} />
                <Pagination 
                jobsPerPage={jobsPerPage} 
                totalJobs={jobs.length} 
                paginate={paginate} />
            </div>
        </>
        )
}
//TODO: Map through DB of jobs and show them all in cards

        