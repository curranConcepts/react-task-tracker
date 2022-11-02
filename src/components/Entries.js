import React from 'react'
import Entry from './Entry'


const Entries = ({ entries, onDelete, onToggle }) => {
  return (
    <>
      {entries.map((entry, index) => (
        <Entry 
            key={index} 
            entry={entry}
            onDelete={onDelete} 
            onToggle={onToggle} />
         ))}
    </>
  )
}

export default Entries