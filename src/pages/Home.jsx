import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'


export default function Home(){
return (
<div className="grid">
<Card>
<h1>Get booked online. Get paid easier.</h1>
<p>No website needed. Share a link, take bookings, send payment requests.</p>
<div className="row">
<Link className="btn" to="/signup">Create your free business page</Link>
<Link to="/b/demo-landscaping">See a demo</Link>
</div>
</Card>
</div>
)
}
