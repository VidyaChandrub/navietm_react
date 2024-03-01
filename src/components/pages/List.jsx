import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

function List(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

export default List;

// import { SortableContext, horizontalListSortingStrategy, verticalListSortingStrategy } from '@dnd-kit/sortable'
// import Dropfiles from './Dropfiles'

// const List = ({tasks}) => {


//   return (
//     <div>
    
//     <div>
//     <SortableContext  items={tasks} strategy={verticalListSortingStrategy}>
//         {
//         tasks.map((task) => (
//             <Dropfiles key={task.id} id={task.id} title={task.title}></Dropfiles>
//         ))
//         }
//         </SortableContext>
//         </div>
//     </div>    
//   )
// }

// export default List