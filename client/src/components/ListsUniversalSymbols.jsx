/* eslint-disable arrow-parens */
import React, { useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import axios from 'axios';
import { customersGrid } from '../data/dummy';

const ListUniversalSymbols = () => {
  const [universalData, setUniversalData] = useState([]);

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  useEffect(() => {
    axios.get('http://localhost:8080/kubri/server/index.php/universal_symbols')
      .then(response => {
        setUniversalData(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees data:', error);
      });
  }, []);
  console.log(universalData);
  return (
    <div>
      <GridComponent
        dataSource={universalData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Resize, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default ListUniversalSymbols;

