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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.name}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}

export default SearchBar;