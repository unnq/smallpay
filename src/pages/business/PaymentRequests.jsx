import React, { useState } from 'react'
import Card from '../../components/Card.jsx'
import Table from '../../components/Table.jsx'


export default function PaymentRequests(){
const [rows] = useState([
{ customer:'Maria Lopez', date:'2025-02-10', amount:'$80', status:'Pending', action:'Send link' },
])
return (
<Card>
<h2>Payment Requests</h2>
<Table columns={[{key:'customer',header:'Customer'},{key:'date',header:'Date'},{key:'amount',header:'Amount'},{key:'status',header:'Status'},{key:'action',header:''}]} rows={rows} />
</Card>
)
}
