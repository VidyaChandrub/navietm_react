// DropContainer.js
import React from 'react';
import { useDrop } from 'react-dnd';

const DropContainer = ({ children, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'file',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const style = {
    border: isOver ? '2px dashed blue' : '2px dashed black',
    minHeight: '200px',
  };

  return (
    <div ref={drop} style={style}>
      <h2>Drop Container</h2>
      {children}
    </div>
  );
};

export default DropContainer;
