import React from 'react'
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    Row {index}
  </div>
);

const HomePage7 = () => (
  <List
    className="List"
    height={500}
    itemCount={1000}
    itemSize={35}
    width={700}
  >
    {Row}
  </List>
);

export default HomePage7