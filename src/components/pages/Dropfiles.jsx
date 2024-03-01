
import React from 'react';
import {useDroppable} from '@dnd-kit/core';

function Dropfiles(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default Dropfiles;
  
// import '../pages/List.css'
// import React from 'react'
// import { useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';

// const Dropfiles = ({id, title}) => {

//     const {attributes, listeners, setNodeRef, transition, transform  } = useSortable({id});

//     const style = {
//         transition,
//         transform: CSS.Transform.toString(transform),
//     };

//   return (
//     <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='task'>{title}</div>
//   )
// }

// export default Dropfiles