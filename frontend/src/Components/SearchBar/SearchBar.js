import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import style from './SearchBar.module.css'
const SearchBar = ({employees})=> {

 const [searchTerm, setSearchTerm] = useState('');

 const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        startadornment={<AiOutlineSearch />}
        className={style.searchInput}
      />
        <div>
          {filteredEmployees.map((employee) => (
            <div key={employee.name} className={style.itemContainer}>
              <div>{employee.name} {employee.age}</div>
              <div>{employee.profession}</div>
            </div>
          ))}
        </div>
    </div>
 );
}

export default SearchBar;