import React, { useState } from 'react'
import Swal from 'sweetalert2';

function EditClient({ clients, selectedClient, setClients, setIsEditing }) {
    const id = selectedClient.id;

    const [clientName, setClientName] = useState(selectedClient.clientName);
    const [startDate, setStartDate] = useState(selectedClient.startDate);
    const [endDate, setEndDate] = useState(selectedClient.endDate);
    const [contactPersonClient, setContactPersonClient] = useState(selectedClient.contactPersonClient);
    const [contactPersonYash, setContactPersonYash] = useState(selectedClient.contactPersonYash);
    const [status, setstatus] = useState(selectedClient.clientStatus)

    const handleUpdate = e => {
        e.preventDefault();

        if (!clientName || !startDate || !endDate || !contactPersonClient || !contactPersonYash || !status) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }


        const client = {
            id,
            clientName,
            startDate,
            endDate,
            contactPersonClient,
            contactPersonYash,
            status
        };

        for (let i = 0; i < clients.length; i++) {
            if (clients[i].id === id) {
                clients.splice(i, 1, client);
                break;
            }
        }

      //  setClients(clients);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${client.clientName} data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };


    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Client</h1>
                <label htmlFor="clientName">Client Name</label>
                <input
                    id="clientName"
                    type="text"
                    name="clientName"
                    value={clientName}
                    onChange={c => setClientName(c.target.value)}
                />
                <label htmlFor="startDate">Start Date</label>
                <input
                    id="startDate"
                    type="date"
                    name="startDate"
                    value={startDate}
                    onChange={c => setStartDate(c.target.value)}
                />
                <label htmlFor="endDate">End Date</label>
                <input
                    id="endDate"
                    type="date"
                    name="endDate"
                    value={endDate}
                    onChange={c => setEndDate(c.target.value)}
                />
                <label htmlFor="contactPersonClient">Contact Client</label>
                <input
                    id="contactPersonClient"
                    type="text"
                    name="contactPersonClient"
                    value={contactPersonClient}
                    onChange={c => setContactPersonClient(c.target.value)}
                />
                <label htmlFor="contactPersonYash">Contact Yash</label>
                <input
                    id="contactPersonYash"
                    type="text"
                    name="contactPersonYash"
                    value={contactPersonYash}
                    onChange={c => setContactPersonYash(c.target.value)}
                />
                <label htmlFor="status">Client Status</label>
                <input
                    id="status"
                    type="text"
                    name="status"
                    value={status}
                    onChange={c => setstatus(c.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    )
}

export default EditClient
