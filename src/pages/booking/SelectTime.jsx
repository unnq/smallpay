import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Input from '../../components/Input.jsx'
import Button from '../../components/Button.jsx'


function useQuery(){
const { search } = useLocation()
return useMemo(()=> new URLSearchParams(search), [search])
}


export default function SelectTime(){
const { slug } = useParams()
const q = useQuery()
const serviceId = q.get('serviceId')
const nav = useNavigate()


const [date, setDate] = useState('')
const [time, setTime] = useState('')
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [notes, setNotes] = useState('')


const submit = (e)=>{
e.preventDefault()
nav(`/b/${slug}/confirmation?serviceId=${serviceId}&date=${date}&time=${time}&name=${encodeURIComponent(name)}`)
}


return (
<form className="grid" style={{maxWidth:520}} onSubmit={submit}>
<h2>Select date & time</h2>
<Input label="Date" type="date" value={date} onChange={e=>setDate(e.target.value)} required />
<Input label="Time" type="time" value={time} onChange={e=>setTime(e.target.value)} required />
<Input label="Your name" value={name} onChange={e=>setName(e.target.value)} required />
<Input label="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
<Input label="Phone" type="tel" value={phone} onChange={e=>setPhone(e.target.value)} required />
<label>
<span className="label">Notes (optional)</span>
<textarea rows="3" value={notes} onChange={e=>setNotes(e.target.value)} />
</label>
<Button>Confirm</Button>
</form>
)
}
