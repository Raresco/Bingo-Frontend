import React from 'react';
import TableComponent from '../components/TableComponent.js';
import NavBar from '../components/NavBar';

function UsersTablePage() {
  const usersTableColumns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Username', accessor: 'username' },
    { Header: 'Password', accessor: 'password'}
  ];

  return (
    <div>
      <NavBar />
      <h1>Users Table</h1>
      <TableComponent fetchDataUrl="http://localhost:9001/user/findAll" tableColumns={usersTableColumns} />
    </div>
  );
}

export default UsersTablePage;