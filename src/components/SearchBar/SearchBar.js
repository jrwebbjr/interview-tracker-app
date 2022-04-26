import { BsSearch } from "react-icons/bs";

export default function SearchBar(){
    return (
        <div class="search">
            {/* <BsSearch className="icon" /> */}
            <input type="search" placeholder="Search Jobs" />
            <i className="search icon"></i>
        </div>
    )
}

//TODO: add functionality to search through jobs by any value