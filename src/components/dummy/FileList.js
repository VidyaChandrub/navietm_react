// FileList.js
import React from 'react';

const FileList = ({ files }) => {
  const handleDragStart = (event, file) => {
    event.dataTransfer.setData('file', JSON.stringify(file));
  };

  return (
    <div>
      <h2>File List</h2>
      <ul>
        {files.map((file, index) => (
          <li 
            key={index} 
            draggable 
            onDragStart={(event) => handleDragStart(event, file)}
          >
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
