import { Card  } from '@tremor/react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { RiArrowRightLine, RiSearch2Line } from '@remixicon/react';
import { Button } from '@tremor/react';


export function CardThree() {
  return (
    <Card
      className="mx-auto max-w-xs"
   
    >
     <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">49</p>
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Recently Joined Users</p>
      <Stack direction="row" spacing={4} margin={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>S</Avatar>
      <Avatar>+42</Avatar>
    </Stack>
    <div>
        <Button variant="primary">Review</Button>
        <Button variant="secondary">Invite New</Button>
      </div>
    </Card>
  );
}