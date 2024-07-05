import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'
import DeleteNote from './src/screens/deleteNote'

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, updateNote, setEditingNote, editingNote, deleteNote, setDeletingNote, deletingNote }) => {
  switch(currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setEditingNote={setEditingNote}
          setDeletingNote={setDeletingNote}
        />
      )
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote}/>
    case 'edit':
      return <EditNote note={editingNote} setCurrentPage={setCurrentPage} updateNote={updateNote}/>
    case 'delete':
      return <DeleteNote note={deletingNote} setCurrentPage={setCurrentPage} deleteNote={deleteNote}/>
    default:
      return <Home/>
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and types industry',
    },
  ])
  const [editingNote, setEditingNote] = useState(null)
  const [deletingNote, setDeletingNote] = useState(null)

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ])
  }

  const updateNote = (id, title, desc) => {
    setNoteList(noteList.map(note => note.id === id ? { id, title, desc } : note))
  }

  const deleteNote = (id) => {
    setNoteList(noteList.filter(note => note.id !== id))
    setCurrentPage('home')
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      updateNote={updateNote}
      deleteNote={deleteNote}
      setEditingNote={setEditingNote}
      editingNote={editingNote}
      setDeletingNote={setDeletingNote}
      deletingNote={deletingNote}
    />
  )
}

export default App
