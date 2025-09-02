import React from 'react'

function BT1() {
    const [value,setvalue] = React.useState('');
    return (
        <div>
            <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
            <input type="text" placeholder='Nhập vào đây' onChange={(e) => setvalue(e.target.value)} />
            <p style={{color:"red"}}>{value.length > 5 ? 'Chuỗi nhập vào dài hơn 5 ký tự!' : ''}</p>
        </div>
    )
}

export default BT1
