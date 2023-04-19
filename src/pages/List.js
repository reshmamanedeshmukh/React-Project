import React from 'react'

function List({ clients, handleEdit, handleDelete }) {

  

    return (
        <div className='contain-table'>
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
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {clients.length > 0 ? (
                        clients.map((client, i) => (
                            <tr key={client.id}>
                                <td>{i + 1}</td>
                                <td>{client.clientName}</td>
                                <td>{client.startDate}</td>
                                <td>{client.endDate}</td>
                                <td>{client.contactPersonClient}</td>
                                <td>{client.contactPersonYash}</td>
                                <td>{client.status} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(client.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(client.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
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
    )
}

export default List