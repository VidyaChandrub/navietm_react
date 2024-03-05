import { useEffect, useState } from 'react';
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../components/Navigation.css';
import '../index.css';
import { CgSearch } from "react-icons/cg";
import { Form, Input, Radio, } from 'antd';
import Button from 'react-bootstrap/Button';
// import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core'
import List from './pages/List';
import Dropfiles from './pages/Dropfiles'
import { Draggable, Droppable } from 'react-drag-and-drop';
// import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';


const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const SearchAndDragDropComponent = ({ data }) => {
  const [query, setQuery] = useState('');
  const [droppedItems, setDroppedItems] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleDrop = (data) => {
    const droppedItem = data['item'];
    setDroppedItems([...droppedItems, droppedItem]);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const onFinish = (value) => {
    console.log(value);
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <div className='container p-5'>
      <p className='file_Count'>100 XML files available</p>

      {/* <DndContext onDragEnd={handleDragEnd}> */}
        <div className='row d-flex justify-content-between'>
          <div className='col-lg-6 col-sm-12 col-12'>
            <div className='card'>

              <Form name="form_item_path" layout="" onFinish={onFinish} className='d-flex justify-content-between mobile_view gap-2  m-5'>
                <MyFormItemGroup className='me-5'>
                  <Input size="large" placeholder="Search file" suffix={<CgSearch />} style={{ background: 'rgba(239, 239, 239, 1)' }} value={query}
        onChange={handleInputChange} />
                </MyFormItemGroup>
                <MyFormItemGroup >
                  <Radio.Group onChange={onChange} value={value} className='d-flex align-items-center'>
                    <Radio value={1}>Title</Radio>
                    <Radio value={2}>DMC</Radio>
                  </Radio.Group>
                </MyFormItemGroup>
              </Form>

              {/* {!parent ? draggable : null} */}
              <ul className='list-group list-group-flush  px-5'>
        {filteredData.map((item, index) => (
          <Draggable key={index} type="item" data={item}>
            <li className='list-group-item'>{item}</li>
          </Draggable>
        ))}
      </ul>

            </div>
          </div>
          <div className='col-lg-6 col-sm-12 col-12'>
            <div className='card text-center m-auto p-5' style={{ height: 355 }}  >
              {/* <Dropfiles id="droppable" className=''>
                {parent === "droppable" ? draggable : 'Drag and Drop the XML files here'}
              </Dropfiles> */}
              <Droppable
        types={['item']}
        onDrop={handleDrop}>
        <div className="droppable-area">
          <p>Drag and Drop the XML files here</p>
          <ul className='list-group list-group-flush'>
            {droppedItems.map((item, index) => (
              <li className='list-group-item' key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Droppable>
            </div>
          </div>
        </div>
      {/* </DndContext> */}
      {/* <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
              
            <List tasks={tasks}/>
            </DndContext> */}
      
    </div>
      
    </div>
  );
};

const Navigation = ({onNext, onPrev}) => {
  
  const data = ['Demo1 xml', 'Demo1 xml', 'Demo1 xml', 'Demo1 xml', 'Demo1 xml'];

    return (
      <div>
        {/* <h2>Search and Drag-and-Drop Example</h2> */}
        <SearchAndDragDropComponent data={data} />


        <div className='row mt-5'>
        <div className="d-flex justify-content-end gap-2">
          <Button as="input" variant="outline-primary" type="reset" value="Reset" className='text-dark'  onClick={onPrev}/>{' '}
          <Button as="input" type="submit" value="Next" className='text-white' onClick={onNext}/>
  
        </div>
      </div>
      </div>



    );
  

}

export default Navigation;