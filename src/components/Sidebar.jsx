import React from 'react'
import { NavLink } from 'react-router-dom'


const linkStyle = ({isActive}) => ({
display:'block', padding:'10px 12px', borderRadius:8,
background: isActive ? '#eef7fd' : 'transparent'
})


export default function Sidebar(){
return (
<aside className="card">
<nav style={{display:'grid', gap:6}}>
<NavLink style={linkStyle} to="/dashboard">Overview</NavLink>
<NavLink style={linkStyle} to="/dashboard/services">Services</NavLink>
<NavLink style={linkStyle} to="/dashboard/availability">Availability</NavLink>
<NavLink style={linkStyle} to="/dashboard/bookings">Bookings</NavLink>
<NavLink style={linkStyle} to="/dashboard/payments">Payment Requests</NavLink>
<NavLink style={linkStyle} to="/dashboard/settings">Settings</NavLink>
</nav>
</aside>
)
}
