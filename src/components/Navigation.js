import { useEffect, useState } from 'react';
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../components/Navigation.css';
import '../index.css';
import { CgSearch } from "react-icons/cg";
import { Form, Input, Radio, } from 'antd';
import Button from 'react-bootstrap/Button';
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core'
import List from './pages/List';
import Dropfiles from './pages/Dropfiles'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';


const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const Navigation = ({ onNext, onPrev }) => {


  const onFinish = (value) => {
    console.log(value);
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };



  const [tasks, setItems] = useState([{ id: 1, title: 'Demo1 xml' }, { id: 2, title: 'Demo1 xml' }, { id: 3, title: 'Demo1 xml' }]);

  const getTaskPos = id => tasks.findIndex(task => task.id === id);

  // const handleDragEnd = (event) => {
  //   const {active, over} = event;

  //   if( active.id === over.id) return;

  //   setItems(tasks => {
  //     const originalPos = getTaskPos(active.id)
  //     const newPos = getTaskPos(over.id);

  //     return arrayMove(tasks, originalPos, newPos)
  //   });
  // };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates, })

  );

  //const [parent, setParent] = useState([{id:1, title:'Demo1 xml'},{id:2, title:'Demo1 xml'}, {id:3, title:'Demo1 xml'} ]);
  const [parent, setParent] = useState(null);
  const draggable = (
    <List id="draggable">
      Demo1 xml
    </List>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
  

  return (
    <div className='container p-5'>
      <p className='file_Count'>100 XML files available</p>

      <DndContext onDragEnd={handleDragEnd}>
        <div className='row d-flex justify-content-between'>
          <div className='col-lg-6 col-sm-12 col-12'>
            <div className='card'>

              <Form name="form_item_path" layout="" onFinish={onFinish} className='d-flex justify-content-between mobile_view gap-2  m-5'>
                <MyFormItemGroup className='me-5'>
                  <Input size="large" placeholder="Search file" suffix={<CgSearch />} style={{ background: 'rgba(239, 239, 239, 1)' }} />
                </MyFormItemGroup>
                <MyFormItemGroup >
                  <Radio.Group onChange={onChange} value={value} className='d-flex align-items-center'>
                    <Radio value={1}>Title</Radio>
                    <Radio value={2}>DMC</Radio>
                  </Radio.Group>
                </MyFormItemGroup>
              </Form>

              {!parent ? draggable : null}

            </div>
          </div>
          <div className='col-lg-6 col-sm-12 col-12'>
            <div className='card text-center m-auto p-5' style={{ height: 355 }}  >
              <Dropfiles id="droppable" className=''>
                {parent === "droppable" ? draggable : 'Drag and Drop the XML files here'}
              </Dropfiles>
            </div>
          </div>
        </div>
      </DndContext>
      {/* <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
              
            <List tasks={tasks}/>
            </DndContext> */}
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