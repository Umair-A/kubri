import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';
import { employeesGrid } from '../data/dummy';

const Securities = () => {
  const [employeesData, setEmployeesData] = useState([]);

  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  useEffect(() => {
    axios.get('http://localhost:8080/kubri/server/index.php/securities')
      .then((response) => {
        setEmployeesData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees data:', error);
      });
  }, []);
  console.log(employeesData);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Securities" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        {/* <ColumnsDirective>
          <ColumnDirective field="EmployeeID" headerText="Employee ID" width="150" textAlign="Center" />
          <ColumnDirective field="Name" headerText="Name" width="150" textAlign="Center" />
          <ColumnDirective field="Description" headerText="Description" width="200" textAlign="Center" />
        </ColumnsDirective> */}
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};

export default Securities;

