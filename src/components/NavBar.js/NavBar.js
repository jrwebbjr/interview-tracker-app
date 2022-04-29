import SearchBar from "../searchBar/SearchBar";
import('../../App.css');


export default function NavBar(){
    return(
        <div className="navbar">
            <h1 className="logo">App-ly</h1>
            <ul className="nav-list">
            <li className="nav-links">Home</li>
            <li className="nav-links"> Add New Job</li>
            </ul>
            <SearchBar />
       </div>
    )
}