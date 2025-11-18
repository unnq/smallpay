import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(){
return (
<header className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0'}}>
<Link to="/" style={{fontWeight:700}}>Jobcito</Link>
<nav className="row">
<Link to="/login">Log in</Link>
<Link className="btn" to="/signup">Create business page</Link>
</nav>
</header>
)
}
