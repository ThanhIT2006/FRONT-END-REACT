import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import Add from "./Component/Add";
import Info from "./Component/Info";
import type { Bill } from "./Component/type";  

function App() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [editingBill, setEditingBill] = useState<Bill | null>(null);

  const handleAddBill = (newBill: Bill) => {
    setBills([...bills, newBill]);
  };

  const handleDeleteBill = (id: number) => {
    setBills(bills.filter((b) => b.id !== id));
  };

  const handleUpdateBill = (updatedBill: Bill) => {
    setBills(bills.map((b) => (b.id === updatedBill.id ? updatedBill : b)));
    setEditingBill(null);
  };

  const handleEditBill = (bill: Bill) => {
    setEditingBill(bill);
  };

  return (
    <div style={{ backgroundColor: "lightgray", padding: "30px", height: "100%",position:"absolute",top:0 }}>
      <Header />
      <Add
        onAddBill={handleAddBill}
        onUpdateBill={handleUpdateBill}
        editingBill={editingBill}
        cancelEdit={() => setEditingBill(null)}
      />
      <Info bills={bills} onDeleteBill={handleDeleteBill} onEditBill={handleEditBill} />
    </div>
  );
}

export default App;
