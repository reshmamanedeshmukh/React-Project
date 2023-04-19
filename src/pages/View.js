import Navbar from "./Navbar";
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { clientsData } from "./data";
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Header from "./Header";


function View()
{

    const [clients, setClients] = useState(clientsData);
    const [selectedClient, setSelectedClient] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [client] = clients.filter(client => client.id === id);

        setSelectedClient(client);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [client] = clients.filter(client => client.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${client.clientName} 's data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setClients(clients.filter(client => client.id !== id));
            }
        });
    }


  return(
    <section>
    <div className="nav"> <Navbar/></div>
    <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header setIsAdding={setIsAdding} />
                    <List
                        clients={clients}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    clients={clients}
                    setClients={setClients}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    clients={clients}
                    selectedClient={selectedClient}
                    setClents={setClients}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
  
  </section>
  )

}export default View;