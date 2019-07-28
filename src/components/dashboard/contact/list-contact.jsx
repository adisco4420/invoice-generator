import React from 'react';

const ListContact = ({contacts}) => {
    return (
    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Full Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Address</th>
        <th scope="col">Actions</th>        
      </tr>
    </thead>
    <tbody>
        {contacts.map((contact, index) => {
            return (<tr key={contact._id}>
                <th scope="row">{index+1}</th>
                <td>{contact.fullName}</td>
                <td>{contact.email || 'null'}</td>
                <td>{contact.phoneNumber || 'null'}</td>
                <td>{contact.address || 'null'}</td>
                <td>
                    <span className="fa fa-eye mr-3" title="open"></span>
                    <span className="fa fa-trash text-danger" title="delete"></span>
                </td>
              </tr>)
        }) }

    </tbody>
  </table> );
}
 
export default ListContact;