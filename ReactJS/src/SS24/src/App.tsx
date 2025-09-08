import Header from "./Component/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Body from "./Component/Body";
interface BodyProps {
  id: number;
  text: string;
}
function App() {
  const [Note, setNotes] = useState<BodyProps[]>([]);
  const [editingNote, setEditingNote] = useState<BodyProps | null>(null);
  const handleAddNote = (newNote: BodyProps) => {
    setNotes([...Note, newNote]);
  };

  const handleDeleteNote = (id: number) => {
    setNotes(Note.filter((n) => n.id !== id));
  };

  const handleUpdateNote = (updatedNote: BodyProps) => {
    setNotes(Note.map((n) => (n.id === updatedNote.id ? updatedNote : n)));
    setEditingNote(null);
  };

  const handleEditNote = (note: BodyProps) => {
    setEditingNote(note);
  };
  return (
    <>
      <Header
        onAdd={handleAddNote}
        onUpdateNote={handleUpdateNote}
        editingNote={editingNote}
      />
      <Body
        Note={Note}
        onDeleteNote={handleDeleteNote}
        onEditNote={handleEditNote} />
    </>
  )
}

export default App


