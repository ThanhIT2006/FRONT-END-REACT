import { useEffect, useState } from "react"; 
import axios from "axios"; 
import { Modal, Button } from "react-bootstrap";

function Render() {

  interface ITodo {     
    id: number;     
    title: string;     
    status: "done" | "doing";   
  }   

  const [todo, setTodo] = useState<ITodo[]>([]);  
  const [show, setShow] = useState(false); 
  const [selected, setSelected] = useState<ITodo | null>(null); 

  const getAllTodo = async () => {     
    try {       
      const res = await axios.get<ITodo[]>("http://localhost:3000/todolist");       
      setTodo(res.data);     
    } catch (err) {       
      console.error("Lỗi khi gọi API:", err);     
    }   
  };   

  useEffect(() => {     
    getAllTodo();   
  }, []);  

  const handleDeleteClick = (item: ITodo) => {
    setSelected(item);
    setShow(true);
  };

  const confirmDelete = async () => {
    if (selected) {
      try {
        await axios.delete(`http://localhost:3000/todolist/${selected.id}`);
        setTodo(todo.filter(t => t.id !== selected.id));
      } catch (err) {
        console.error("Lỗi khi xóa:", err);
      }
    }
    setShow(false);
  };

  return (
    <div>
      <div>           
        {todo.map((t) => (             
          <div key={t.id}>             
            <div style={{boxShadow: "2px 2px 10px lightgray",border: "1px solid lightgray",padding: "10px",borderRadius: "6px",marginTop: "10px",display: "flex",justifyContent: "space-between",alignItems: "center"}}>               
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>                 
                <input type="checkbox" />                 
                <span>{t.title}</span>               
              </div>               
              <div style={{ display: "flex", gap: "10px", fontSize: "18px", cursor: "pointer" }}>                 
                <div>✏️</div>                 
                <div onClick={() => handleDeleteClick(t)}>🗑️</div>               
              </div>             
            </div>           
          </div>         
        ))}       
      </div> 

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selected && <>Bạn có chắc chắn muốn xóa công việc <b>{selected.title}</b> không?</>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Hủy</Button>
          <Button variant="danger" onClick={confirmDelete}>Xóa</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Render;
