import { Button } from "react-bootstrap"

function Add() {

    return (
        <div>
            <div style={{ padding: "20px" ,boxShadow: "2px 2px 10px lightgray", display: "flex", gap: "10px",flexDirection:"column"}}>         
            <input style={{color:"black",padding:"5px", backgroundColor:"white", borderRadius:"5px", border:"1px solid lightgray"}} type="text" placeholder="Nhập tên công việc" />         
            <Button variant="primary">Thêm công việc</Button>       
            </div> 
        </div>
    )
}

export default Add
