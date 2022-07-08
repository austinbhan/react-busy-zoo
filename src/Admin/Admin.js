import React from 'react';
import { MyCharts, HorizontalChart } from './MyCharts';
import { DataTable } from './MyTable';

export default function Admin() {
  return (
    <div className="mychart-mytable"> 
      <MyCharts />
      <DataTable />
      <HorizontalChart />
    </div>
  );
}
