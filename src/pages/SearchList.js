import { useState } from 'react';
import Search from './Search';
import { clientsData } from "./data";

function SearchList() {

   const [searchInput, setSearchInput] = useState("");
    
     const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);

        if (searchInput.length > 0) {
            clientsData.filter((client) => {
            return client.clientName.match(searchInput);
        });
        }
     
    }
    return (
        <div>
             <Search
                
            />
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Client Name</th>
                        <th>start Date</th>
                        <th>End Date</th>
                        <th>contactPersonClient</th>
                        <th>contactPersonYash</th>
                        <th>status</th>
                        
                    </tr>
                </thead>
                <tbody>
                {clientsData.length > 0 ? (
                        clientsData.map((client, i) => (
                            <tr key={client.id}>
                                <td>{i }</td>
                                <td>{client.clientName}</td>
                                <td>{client.startDate}</td>
                                <td>{client.endDate}</td>
                                <td>{client.contactPersonClient}</td>
                                <td>{client.contactPersonYash}</td>
                                <td>{client.status} </td>
                              
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Clients</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default SearchList;