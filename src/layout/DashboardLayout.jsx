import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'


export default function DashboardLayout(){
return (
<div className="container" style={{display:'grid', gridTemplateColumns:'240px 1fr', gap:16}}>
<Sidebar />
<div>
<Outlet />
</div>
</div>
)
}
