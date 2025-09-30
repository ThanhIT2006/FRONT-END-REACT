import axios from "axios";
import { useState, type ChangeEvent } from "react"

function UploadImage() {
  const [files,setFiles]=useState<File[]>([])
  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    if(e.target.files){
     setFiles( Array.from(e.target.files));
    }
  }
  function handleUpload() {
    if (files.length===0) {
      console.log("vui long chon file");
      return
    }
    const data=new FormData()
    data.append("files",files)
    data.append("upload_preset","upload" )
    data.append("cloud_name","df5vls8yc")
    try{
      const res=axios.post("",data)
      console.log();
      
    }
  }
  return (
    <div>
      <input type="file" multiple onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default UploadImage
