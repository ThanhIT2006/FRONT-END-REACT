import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

function Todolist() {
  const [activeBtn, setActiveBtn] = useState<"all" | "done" | "doing">("all");
  const [input, setInput] = useState(""); 
  const [error, setError] = useState(""); 

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

  const handleAdd = async () => {
  if (!input.trim()) {
    setError("Tên công việc không được để trống.");
    return;
  }
  setError("");

  try {
    const newTodo = {
        title: input,
        status: "doing",
    };
    const res = await axios.post("http://localhost:3000/todolist", newTodo);
      setTodo([...todo, res.data]);
      setInput("");
    } catch (err) {
      console.error("Lỗi khi thêm:", err);
    }
  };

  const handleDeleteClick = (item: ITodo) => {
    setSelected(item);
    setShow(true);
  };

  const confirmDelete = async () => {
    if (!selected) return;
    try {
      await axios.delete(`http://localhost:3000/todolist/${selected.id}`);
      setTodo((prev) => prev.filter((t) => t.id !== selected.id));
      setShow(false);
      setSelected(null);
    } catch (err) {
      console.error("Lỗi khi xóa:", err);
      alert("Xóa thất bại!");
    }
  };
  const getStyle = (key: "all" | "done" | "doing") => ({
    backgroundColor: activeBtn === key ? "#0d6efd" : "white",
    color: activeBtn === key ? "white" : "black",
    border: activeBtn === key ? "1px solid #0d6efd" : "1px solid gray",
    marginRight: "8px",
  });

  const filteredTodo =
    activeBtn === "all" ? todo : todo.filter((t) => t.status === activeBtn);

  return (
    <div style={{ padding: "20px", boxShadow: "2px 2px 10px lightgray", width: "500px", }}>
      <h4 style={{ textAlign: "center" }}>Quản lý công việc</h4>

      <div style={{ padding: "20px", boxShadow: "2px 2px 10px lightgray", display: "flex", gap: "10px", flexDirection: "column", }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} style={{ color: "black", padding: "5px", backgroundColor: "white", borderRadius: "5px", border: error ? "1px solid red" : "1px solid lightgray", }} type="text" placeholder="Nhập tên công việc"/>
        {error && (
          <div style={{ color: "red", fontSize: "14px" }}>{error}</div>
        )}
        <Button variant="primary" onClick={handleAdd}>
          Thêm công việc
        </Button>
      </div>

      <div style={{paddingTop: "20px",paddingBottom: "20px",paddingLeft: "70px",display: "flex",boxShadow: "2px 2px 10px lightgray",}} className="mt-3">
        <Button style={getStyle("all")} onClick={() => setActiveBtn("all")}>
          Tất cả
        </Button>
        <Button style={getStyle("done")} onClick={() => setActiveBtn("done")}>
          Hoàn Thành
        </Button>
        <Button style={getStyle("doing")} onClick={() => setActiveBtn("doing")}>
          Đang thực hiện
        </Button>
      </div>

      <div>
        {filteredTodo.map((t) => (
          <div key={t.id}>
            <div style={{boxShadow: "2px 2px 10px lightgray",border: "1px solid lightgray",padding: "10px",borderRadius: "6px", marginTop: "10px",display: "flex",justifyContent: "space-between",alignItems: "center",}}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <input type="checkbox" />
                <span>{t.title}</span>
              </div>
              <div style={{display: "flex",gap: "10px",fontSize: "18px",cursor: "pointer",}}>
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
          {selected && (
            <>
              Bạn có chắc chắn muốn xóa công việc <b>{selected.title}</b> không?
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Hủy
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
       <div style={{display:"flex",justifyContent:"space-between", marginTop:"20px"}}>         
        <Button style={{width:"210px"}} variant="danger">Xóa công việc hoàn thành</Button>         
        <Button style={{width:"210px"}} variant="danger">Xóa tất cả công việc</Button>       
      </div>   
      
    </div>
  );
}
export default Todolist;
