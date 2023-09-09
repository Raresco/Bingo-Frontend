import React from 'react';
import TableComponent from '../components/TableComponent.js';
import NavBar from '../components/NavBar';

function DefaultPhrasesTablePage() {
  const defaultPhrasesTableColumns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Phrase Body', accessor: 'defaultPhraseBody' },
  ];

  return (
    <div>
      <NavBar />
      <h1>Default Phrases</h1>
      <TableComponent fetchDataUrl="http://localhost:9001/defaultPhrases/findAll" tableColumns={defaultPhrasesTableColumns} />
    </div>
  );
}

export default DefaultPhrasesTablePage;