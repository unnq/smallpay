import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBusinessBySlug, getServicesBySlug } from '../../api/mock.js'
import Card from '../../components/Card.jsx'


export default function PublicBusiness(){
const { slug } = useParams()
const [biz, setBiz] = useState(null)
const [services, setServices] = useState([])


useEffect(()=>{
setBiz(getBusinessBySlug(slug))
setServices(getServicesBySlug(slug))
},[slug])


if(!biz) return <div>Loading…</div>


return (
<div className="grid">
<Card>
<h2>{biz.name}</h2>
<p style={{color:'var(--muted)'}}>{biz.tagline}</p>
</Card>


{services.map(s => (
<Card key={s.id}>
<h3>{s.title} — ${s.price}</h3>
<p className="muted">{s.description}</p>
<Link className="btn" to={`#/b/${slug}/time?serviceId=${s.id}`}>Book now</Link>
</Card>
))}
</div>
)
}
