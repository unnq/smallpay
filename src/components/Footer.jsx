import React from 'react'
export default function Footer(){
return (
<footer className="container" style={{padding:'24px 0', color:'var(--muted)'}}>
© {new Date().getFullYear()} smallpay (Demo)
</footer>
)
}
