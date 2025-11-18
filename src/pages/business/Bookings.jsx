import React from 'react'
import Card from '../../components/Card.jsx'
import Table from '../../components/Table.jsx'
import { listBookings } from '../../api/mock.js'


export default function Bookings(){
const rows = listBookings('demo-landscaping').map(b=> ({
date: b.date, time: b.time, service: b.serviceTitle, customer: b.customerName, status: b.status
}))
return (
<Card>
<h2>Bookings</h2>
<Table columns={[{key:'date',header:'Date'},{key:'time',header:'Time'},{key:'service',header:'Service'},{key:'customer',header:'Customer'},{key:'status',header:'Status'}]} rows={rows} />
</Card>
)
}
