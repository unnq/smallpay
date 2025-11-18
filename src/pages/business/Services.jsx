import React, { useState } from 'react'
import Card from '../../components/Card.jsx'
import Input from '../../components/Input.jsx'
import Button from '../../components/Button.jsx'
import Table from '../../components/Table.jsx'
import { listServices, createService, deleteService } from '../../api/mock.js'


export default function Services(){
const [rows, setRows] = useState(listServices('demo-landscaping'))
const [form, setForm] = useState({ title:'', price:'', description:'' })


const add = (e)=>{
e.preventDefault()
createService('demo-landscaping', { ...form, price: Number(form.price) || 0 })
setRows(listServices('demo-landscaping'))
setForm({ title:'', price:'', description:'' })
}


const remove = (id)=>{
deleteService(id)
setRows(listServices('demo-landscaping'))
}


return (
<div className="grid">
<Card>
<h2>Services</h2>
<Table
columns={[{key:'title', header:'Title'},{key:'price', header:'Price'},{key:'description', header:'Description'},{key:'actions', header:''}]}
rows={rows.map(r=> ({
...r,
actions: <button className="btn ghost" onClick={()=>remove(r.id)}>Delete</button>
}))}
/>
</Card>
<Card>
<h3>Add service</h3>
<form className="grid" style={{maxWidth:520}} onSubmit={add}>
<Input label="Title" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} required />
<Input label="Price ($)" type="number" value={form.price} onChange={e=>setForm(f=>({...f,price:e.target.value}))} required />
<label>
<span className="label">Description</span>
<textarea rows="3" className="input" value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} />
</label>
<Button>Add</Button>
</form>
</Card>
</div>
)
}
