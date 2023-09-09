import React from 'react';
import TableComponent from '../components/TableComponent.js';
import NavBar from '../components/NavBar';

function CustomPhrasesTablePage() {
  const customPhrasesTableColumns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Phrase Body', accessor: 'customPhraseBody' },
  ];

  return (
    <div>
      <NavBar />
      <h1>Custom Phrases</h1>
      <TableComponent fetchDataUrl="http://localhost:9001/customPhrases/findAll" tableColumns={customPhrasesTableColumns} />
    </div>
  );
}

export default CustomPhrasesTablePage;