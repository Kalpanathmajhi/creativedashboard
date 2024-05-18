import { DonutChart, Legend,Card } from '@tremor/react';


const sales = [
  {
    name: 'Active',
    sales: 980,
  },
  {
    name: 'In Active',
    sales: 456,
  },
  {
    name: 'In Progress',
    sales: 390,
  },

];

const valueFormatter = (number) =>
  ` ${Intl.NumberFormat('us').format(number).toString()}`;

export function CardOne() {
  return (
    <>
      <Card className="mx-auto max-w-sm">
      <p className="text-text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">237</p>
      <p className="text-xltremor-default text-tremor-content dark:text-dark-tremor-content">Total User</p>

      <div className="flex items-center justify-center space-x-6">
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={['blue', 'cyan', 'grey']}
          className="w-40"
        />
        <Legend
          categories={['Active', 'In Active', 'In Progress']}
          colors={['blue', 'cyan', 'grey']}
          className="max-w-xs"
        />
      </div>
      </Card>
       
    </>
  );
}