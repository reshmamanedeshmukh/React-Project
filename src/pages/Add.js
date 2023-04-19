import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ clients, setClients, setIsAdding }) {

    const [clientName, setclientName] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [contactPersonClient, setcontactPersonClient] = useState('');
    const [contactPersonYash, setcontactPersonYash] = useState('');
    const [status, setstatus] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!clientName || !startDate || !endDate || !contactPersonClient || !contactPersonYash || !status) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = clients.length + 1;
        const newClient = {
            id,
            clientName,
            startDate,
            endDate,
            contactPersonClient,
            contactPersonYash,
            status
        }
        clients.push(newClient);
        setClients(clients);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${clientName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="clientName">Client Name</label>
                <input
                    id="clientName"
                    type="text"
                    ref={textInput}
                    name="clientName"
                    value={clientName}
                    onChange={e => setclientName(e.target.value)}
                />
                <label htmlFor="startDate">startDate</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={startDate}
                    onChange={e => setstartDate(e.target.value)}
                />
                <label htmlFor="endDate">EndDate</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={endDate}
                    onChange={e => setendDate(e.target.value)}
                />
                <label htmlFor="contactPersonClient">contactPersonClient</label>
                <input
                    id="contactPersonClient"
                    type="text"
                    name="contactPersonClient"
                    value={contactPersonClient}
                    onChange={e => setcontactPersonClient(e.target.value)}
                />
                <label htmlFor="contactPersonYash">contactPersonYash</label>
                <input
                    id="contactPersonYash"
                    type="text"
                    name="contactPersonYash"
                    value={contactPersonYash}
                    onChange={e => setcontactPersonYash(e.target.value)}
                />
                <label htmlFor="status">status</label>
                <input
                    id="status"
                    type="text"
                    name="status"
                    value={status}
                    onChange={e => setstatus(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add