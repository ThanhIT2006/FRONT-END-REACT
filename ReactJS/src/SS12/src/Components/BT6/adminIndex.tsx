import Menu from './Menu'
import Head from './Header'
import Main from './Main'
import Footer from './Footer'
import "./AdminIndex.css"

export default function AdminIndex() {
  return (
    <div className='admin-layout'>
        <Head/>
        <div className='content'>
            <Menu/>
            <div className='main'>
                <Main/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}