import {  NavLink, Outlet } from 'react-router-dom'

export default function Header() {
      const customerStyle = ({ isActive }: { isActive: boolean }) => {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "white" : "",
    backgroundColor: isActive ? "red" : "",
    textDecoration: isActive ? "none": "none",
    padding: isActive ? "10px": "10px",
  }
}
  return (
    <div>
        <nav style={{display:'flex' ,gap:10}}>
        <NavLink style={customerStyle} to="/homes">Home</NavLink>
        <NavLink style={customerStyle} to="/product">Product</NavLink>
        <NavLink style={customerStyle} to="/detail">Detail</NavLink>
      </nav>
        <nav style={{display :'flex'}}>
            <Outlet/>
        </nav>
    </div>
  )
}