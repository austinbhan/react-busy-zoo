import React from 'react';
import { chartData, chartDataTwo } from './Data';
import { VictoryBar, VictoryChart, VictoryScatter } from 'victory';

export function MyCharts() {
  return (
    <VictoryChart>
      <VictoryBar data={chartData} x="quarter" y="earnings" />
    </VictoryChart>
  );
}

// Make another bar chart

export function HorizontalChart() {
  return (
    <VictoryChart horizontal
      domainPadding={{ x: 8 }}
    >
      <VictoryBar
        style={{
          data: { fill: '#c43a31' }
        }}
        data={chartDataTwo} x="name" y="age"
      />
      <VictoryScatter
        data={chartDataTwo} x="name" y="age"
      />
    </VictoryChart>
  );
}