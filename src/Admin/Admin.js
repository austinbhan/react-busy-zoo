import React from 'react';
import MyCharts from './MyCharts';
import MyTable from './MyTable';

export default function Admin() {
  return (
    <div className="mychart-mytable"> 
      <MyCharts />
      <MyTable />
    </div>
  );
}
