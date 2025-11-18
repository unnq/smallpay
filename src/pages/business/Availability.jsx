import React, { useState } from 'react'
import Card from '../../components/Card.jsx'


const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']


export default function Availability(){
const [hours, setHours] = useState(
DAYS.map(()=>({ enabled:true, start:'09:00', end:'17:00' }))
)


return (
<Card>
<h2>Availability</h2>
<div className="grid" style={{gridTemplateColumns:'repeat(1, minmax(0,1fr))'}}>
{DAYS.map((d,i)=> (
<div key={d} className="row" style={{justifyContent:'space-between'}}>
<label className="row" style={{gap:8}}>
<input type="checkbox" checked={hours[i].enabled} onChange={e=>setHours(h=> h.map((x,j)=> j===i? {...x,enabled:e.target.checked}:x ))} />
<strong>{d}</strong>
</label>
<div className="row" style={{gap:8}}>
<input className="input" type="time" value={hours[i].start} onChange={e=>setHours(h=> h.map((x,j)=> j===i? {...x,start:e.target.value}:x ))} />
<span>to</span>
<input className="input" type="time" value={hours[i].end} onChange={e=>setHours(h=> h.map((x,j)=> j===i? {...x,end:e.target.value}:x ))} />
</div>
</div>
))}
</div>
</Card>
)
}
