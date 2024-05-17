import { Card, Metric, Text } from '@tremor/react';
import { List, ListItem } from '@tremor/react';
import { RiRecordCircleFill } from '@remixicon/react';

import { Badge, BadgeDelta } from '@tremor/react';



export function Cardtwo() {
  return (
    <Card
      className="mx-auto max-w-xs"
     
     
    >
    <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">User Earnings</p>
      <div className="mx-auto max-w-md">
      <List>
        <ListItem>
          <span>Roger Federer</span>
          <BadgeDelta deltaType="increase"  />
          <span>10,550</span>
        </ListItem>
        <ListItem>
          <span>Rafel Nadal</span>
          <BadgeDelta deltaType="decrease"  />
          <span>9,205</span>
        </ListItem>
        <ListItem>
          <span>Novak Djokovic</span>
          <BadgeDelta deltaType="increase"  />
          <span>8,310</span>
        </ListItem>
      </List>
    </div>
    </Card>
  );
}