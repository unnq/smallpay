import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'


function useQuery(){
const { search } = useLocation()
return useMemo(()=> new URLSearchParams(search), [search])
}


export default function Confirmation(){
const q = useQuery()
const name = q.get('name')
const date = q.get('date')
const time = q.get('time')


return (
<div className="card">
<h2>You're booked{ name ? `, ${decodeURIComponent(name)}` : '' }!</h2>
<p>We sent a confirmation to your email/phone. See you on {date} at {time}.</p>
</div>
)
}
