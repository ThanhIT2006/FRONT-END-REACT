
import { Button } from "react-bootstrap";
import { useState } from "react";
function Filter() {
const [activeBtn, setActiveBtn] = useState<"all" | "done" | "doing">("all");  

  const getStyle = (key: "all" | "done" | "doing") => ({     
    backgroundColor: activeBtn === key ? "#0d6efd" : "white",     
    color: activeBtn === key ? "white" : "black",     
    border: activeBtn === key ? "1px solid #0d6efd" : "1px solid gray",     
    marginRight: "8px",   
  });   
    return (
        <div>
            <div style={{paddingTop:"20px",paddingBottom:"20px",paddingLeft:"70px",display:"flex",boxShadow: "2px 2px 10px lightgray"}}  className="mt-3">         
            <Button style={getStyle("all")} onClick={() => setActiveBtn("all")}>Tất cả</Button>         
            <Button style={getStyle("done")} onClick={() => setActiveBtn("done")}>Hoàn Thành</Button>         
            <Button style={getStyle("doing")} onClick={() => setActiveBtn("doing")}>Đang thực hiện</Button>       
            </div>  
        </div>
    )
}

export default Filter
