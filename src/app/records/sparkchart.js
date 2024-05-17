import { BarChart,Card } from '@tremor/react';
import { Tab, TabGroup, TabList } from '@tremor/react';

const chartdata = [
  {
    name: 'Amphibians',
    "": 2488,
  },
  {
    name: 'Birds',
    "": 1445,
  },
  {
    name: 'Crustaceans',
    "": 743,
  },
  {
    name: 'Ferns',
    "": 281,
  },
  {
    name: 'Arachnids',
    "": 251,
  },
  {
    name: 'Corals',
    "": 232,
  },
  {
    name: 'Algae',
    "": 98,
  },
];

const dataFormatter = (number) =>
  Intl.NumberFormat('us').format(number).toString();

export function BarChartUsageExample() {
  return (
    <>
    <Card
      className="mx-auto max-w-xs">
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
       Deals
      </h3>
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">27 New Deals</p>
      <TabGroup>
      <TabList variant="solid" defaultValue="1">
        <Tab value="1">Agents</Tab>
        <Tab value="2">Clients</Tab>
      </TabList>
    </TabGroup>

      <BarChart
       
        className="mt-6"
        data={chartdata}
        index="name"
        categories={[""]}
        colors={['blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
      </Card>
    </>
  );
}