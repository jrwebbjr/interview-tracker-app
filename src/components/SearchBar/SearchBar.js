// import { BsSearch } from "react-icons/bs";

// export default function SearchBar(){
//     const { search } = window.location;

//     const query = new URLSearchParams(search).get('searchTerm');

//     const filteredJobs = filterJobs(jobs, query);

//     const filterJobs = (jobs, query) => {
//         if(!query){
//             return jobs;
//         }
//         return jobs.filter((job) => {
//             const jobCompany = job.company.toLowerCase()
//             return jobCompany.includes(query);
//         })
//     }


//     return (
//         <div class="search">
//             <BsSearch className="icon" />
//             <input type="text" name="searchTerm" value={ } placeholder="Search Jobs" onChange={handleChange} />
//             <input type="submit" value="Search Jobs" />
//         </div>
//     )
// }

//TODO: add functionality to search through jobs by any value