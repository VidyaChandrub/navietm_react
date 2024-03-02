import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainLayout from './components/MainLayout';
import Home from './components/pages/Home';
import MultiStepForm from './components/dummy/MultiStepForm';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </Router>
      {/* <MultiStepForm/> */}

    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import { Draggable, Droppable } from 'react-drag-and-drop';

// const SearchAndDragDropComponent = ({ data }) => {
//   const [query, setQuery] = useState('');
//   const [droppedItems, setDroppedItems] = useState([]);

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleDrop = (data) => {
//     const droppedItem = data['item'];
//     setDroppedItems([...droppedItems, droppedItem]);
//   };

//   const filteredData = data.filter((item) =>
//     item.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={handleInputChange}
//       />
//       <ul>
//         {filteredData.map((item, index) => (
//           <Draggable key={index} type="item" data={item}>
//             <li>{item}</li>
//           </Draggable>
//         ))}
//       </ul>
//       <Droppable
//         types={['item']}
//         onDrop={handleDrop}>
//         <div className="droppable-area">
//           <h2>Dropped Items</h2>
//           <ul>
//             {droppedItems.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </Droppable>
//     </div>
//   );
// };

// const App = () => {
//   const data = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

//   return (
//     <div>
//       <h2>Search and Drag-and-Drop Example</h2>
//       <SearchAndDragDropComponent data={data} />
//     </div>
//   );
// };

// export default App;
