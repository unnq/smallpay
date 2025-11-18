import React from 'react'
export default function EmptyState({title, action}){
return (
<div className="card" style={{textAlign:'center'}}>
<p style={{color:'var(--muted)'}}>{title}</p>
{action}
</div>
)
}
