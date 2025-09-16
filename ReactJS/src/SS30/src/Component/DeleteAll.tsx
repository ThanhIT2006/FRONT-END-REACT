import { Button } from "react-bootstrap"

function DeleteAll() {

    return (
        <div style={{display:"flex",justifyContent:"space-between", marginTop:"20px"}}>         
        <Button style={{width:"210px"}} variant="danger">Xóa công việc hoàn thành</Button>         
        <Button style={{width:"210px"}} variant="danger">Xóa tất cả công việc</Button>       
      </div>     
    )
}

export default DeleteAll
