import { AreaChart,Card } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 22',
    Active: 2890,
    'InActive': 2338,
  },
  {
    date: 'Feb 22',
    Active: 2756,
    'InActive': 2103,
  },
  {
    date: 'Mar 22',
    Active: 3322,
    'InActive': 2194,
  },
  {
    date: 'Apr 22',
    Active: 3470,
    'InActive': 2108,
  },
  {
    date: 'May 22',
    Active: 3475,
    'InActive': 1812,
  },
  {
    date: 'Jun 22',
    Active: 3129,
    'InActive': 1726,
  },
  {
    date: 'Jul 22',
    Active: 3490,
    'InActive': 1982,
  },
  {
    date: 'Aug 22',
    Active: 2903,
    'InActive': 2012,
  },
  {
    date: 'Sep 22',
    Active: 2643,
    'InActive': 2342,
  },
  {
    date: 'Oct 22',
    Active: 2837,
    'InActive': 2473,
  },
  {
    date: 'Nov 22',
    Active: 2954,
    'InActive': 3848,
  },
  {
    date: 'Dec 22',
    Active: 3239,
    'InActive': 3736,
  },
];

const valueFormatter = function (number) {
  return ' ' + new Intl.NumberFormat('us').format(number).toString();
};

export function AreaChartUsageExample() {
  return (
    <>
    <Card
      className="mx-auto max-w-xs"
   
    >
     <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Users Over Time</p>
   
      
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['Active', 'InActive']}
        colors={['indigo', 'cyan']}
        valueFormatter={valueFormatter}
      />
      </Card>
    </>
  );
}