import { useState } from "react";

interface BodyProps {
  id: number;
  text: string;
}

function Body({
  Note,
  onDeleteNote,
  onEditNote,
}: {
  Note: BodyProps[];
  onDeleteNote: (id: number) => void;
  onEditNote: (note: BodyProps) => void;
}) {
  const [show, setShow] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = (id: number) => {
    setSelectedNoteId(id);
    setShow(true);
  };

  const handleDelete = () => {
    if (selectedNoteId !== null) {
      onDeleteNote(selectedNoteId);
    }
    setShow(false);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        padding: "15px",
      }}
    >
      {Note.length === 0 ? (
        <p style={{ textAlign: "center" }}>Chưa có ghi chú nào</p>
      ) : (
        Note.map((note) => (
          <div
            key={note.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#202020",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "5px solid #FFC53D",
            }}
          >
            <p style={{ fontSize: "20px", color: "white", paddingTop: "10px" }}>
              {note.text}
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <p onClick={() => onEditNote(note)}>✏️</p>
              <p onClick={() => handleShow(note.id)}>🗑️</p>
            </div>
          </div>
        ))
      )}

      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "15px",
              width: "270px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              position: "absolute",
              top:'280px',
              left:'200px'
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              <span style={{ marginRight: "8px", color: "#ffc107" }}>⚠️</span>
              <span style={{ color: "black" }}>Xóa note</span>
            </div>
            <div
              style={{ fontSize: "15px", marginBottom: "15px", color: "#333" }}
            >
              Bạn có muốn xóa note này không?
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              <button
                style={{
                  border: "none",
                  padding: "6px 18px",
                  borderRadius: "20px",
                  background: "#f1f1f1",
                  color: "#333",
                  cursor: "pointer",
                }}
                onClick={handleClose}
              >
                No
              </button>
              <button
                style={{
                  border: "none",
                  padding: "6px 18px",
                  borderRadius: "20px",
                  background: "#0d6efd",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={handleDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
