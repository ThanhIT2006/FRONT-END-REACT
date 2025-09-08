
import React, { useState,useEffect } from "react";
interface BodyProps {
  id: number;
  text: string;
}
interface AddNoteProps {
  onAdd: (note: BodyProps) => void;
  onUpdateNote: (note: BodyProps) => void;
  editingNote: BodyProps | null;
}
function Header({ onAdd, onUpdateNote, editingNote }: AddNoteProps) {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
    if (editingNote) {
      setInput(editingNote.text);
    }
    }, [editingNote]);
    const handleAdd = () => {
    if (input.trim() === "") {
      setError("Nội dung ghi chú không được bỏ trống");
      return;
    }
    setError("");
    if (editingNote) {
      onUpdateNote({
        ...editingNote,
        text: input,
      });
    } else {
      const newNote: BodyProps = {
        id: Date.now(),
        text: input,
      };
      onAdd(newNote);
    }

    setInput("");
    };
    
    return (
        <div style={{backgroundColor:'#FFC53D',borderTopLeftRadius:'10px',borderTopRightRadius:'10px', width:'400px', padding:'15px'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                 <h4>STICKY NOTE</h4>
                 <p onClick={handleAdd}>💾</p>
            </div>
            <input value={input} onChange={(e) => setInput(e.target.value)} style={{width:'100%',borderRadius:'10px',height:'100px'}} type="text" />
            {error && <p style={{marginLeft:'40px'}} className="text-danger">{error}</p>}
        </div>
    )
}

export default Header
