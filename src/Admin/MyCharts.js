import React from 'react';
import { chartData } from './Data';
import { VictoryBar, VictoryChart } from 'victory';

export default function MyCharts() {
  return (
    <VictoryChart>
      <VictoryBar data={chartData} x="quarter" y="earnings" />
    </VictoryChart>
  );
}