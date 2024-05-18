import { RiFlag2Line } from '@remixicon/react';
import Pagination from '@mui/material/Pagination';
import { RiSearchLine } from '@remixicon/react';
import style from "../accounts/userTable.module.css"

import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TextInput,
} from '@tremor/react';
import styled from '@emotion/styled';

const data = [
  {
    name: 'Viola Amherd',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
    status: 'Approved',
    Details: "Edit"
  },
  {
    name: 'Albert Rösti',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
    status: 'Declined',
    Details: "Edit"
  },
  {
    name: 'Beat Jans',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Justice and Police (FDJP)',
    status: 'In Progress',
    Details: "Edit"
  },
  {
    name: 'Ignazio Cassis',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Foreign Affairs (FDFA)',
    status: 'In Progress',
    Details: "Edit"
  },
  {
    name: 'Karin Keller-Sutter',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Finance (FDF)',
    status: 'Approved',
    Details: "Edit"
  },
  {
    name: 'Guy Parmelin',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Economic Affairs, Education and Research (EAER)',
    status: 'Declined',
    Details: "Edit"
  },
  {
    name: 'Elisabeth Baume-Schneider',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Home Affairs (FDHA)',
    status: 'In Progress',
    Details: "Edit"
  },
  {
    name: 'Karin Keller-Sutter',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Finance (FDF)',
    status: 'Approved',
    Details: "Edit"
  },
  {
    name: 'Guy Parmelin',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Economic Affairs, Education and Research (EAER)',
    status: 'Declined',
    Details: "Edit"
  },
  {
    name: 'Elisabeth Baume-Schneider',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Home Affairs (FDHA)',
    status: 'In Progress',
    Details: "Edit"
  },
  
  
];

export function TableUsageExample() {
  return (
    <>
    <h4>Users(38)</h4> 
    <div>
        <TextInput icon={RiSearchLine} placeholder="Search..." />
      </div>
    
    <Card>
      <Table className="mt-7">
        <TableHead>
          <TableRow>
            <TableHeaderCell>ITEMS & DESCRIPTIONS</TableHeaderCell>
            <TableHeaderCell>JOIN DATE</TableHeaderCell>
            <TableHeaderCell>EARNINGS</TableHeaderCell>
            <TableHeaderCell>STATUS</TableHeaderCell>
            <TableHeaderCell>DETAILS</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.Role}
              </TableCell>
              <TableCell>
                {item.departement}
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={RiFlag2Line}>
                  {item.status}
                </Badge>
               
              </TableCell>
              <TableCell>
              <Badge> Edit</Badge>
                
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </Card>
    <div className={style.bottomContainer}>
    <h3>Showing 1 to 10 of 50 data</h3>
    <Pagination count={10} variant="outlined" shape="rounded"/>
    </div>
    </>
   
  );
}