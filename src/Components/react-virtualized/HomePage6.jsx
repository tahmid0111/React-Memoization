// import React from 'react'
// import {
//   List,
//   AutoSizer,
//   CellMeasurer,
//   CellMeasurerCache,
// } from "react-virtualized";
// import { faker } from '@faker-js/faker';
// import { bpfrpt_proptype_WindowScroller } from "node_modules/react-virtualized/dist/es/WindowScroller/utils/WindowScroller.js"

// function HomePage6() {
//   const cache = React.useRef(
//     new CellMeasurerCache({
//       fixedWidth: true,
//       defaultHeight: 100,
//     })
//   );
//   const [people, setPeople] = React.useState([]);
//   const [time, setTime] = React.useState(new Date());

//   React.useEffect(() => {
//     setPeople(
//       [...Array(1000).keys()].map((key) => {
//         return {
//           id: key,
//           name: `${faker.internet.userName()}`,
//           bio: faker.internet.email(),
//         };
//       })
//     );
//   }, []);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>{time.toISOString()}</h1>

//       <div style={{ width: "100%", height: "100vh" }}>
//         <AutoSizer>
//           {({ width, height }) => (
//             <List
//               width={width}
//               height={height}
//               rowHeight={cache.current.rowHeight}
//               deferredMeasurementCache={cache.current}
//               rowCount={people.length}
//               rowRenderer={({ key, index, style, parent }) => {
//                 const person = people[index];

//                 return (
//                   <CellMeasurer
//                     key={key}
//                     cache={cache.current}
//                     parent={parent}
//                     columnIndex={0}
//                     rowIndex={index}
//                   >
//                     <div style={style}>
//                       <h2>{person.name}</h2>
//                       <p>{person.bio}</p>
//                     </div>
//                   </CellMeasurer>
//                 );
//               }}
//             />
//           )}
//         </AutoSizer>
//       </div>

//       {/* <ul>
//         {people.map((person) => (
//           <li key={person.id}>
//             <h2>{person.name}</h2>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }
// export default HomePage6