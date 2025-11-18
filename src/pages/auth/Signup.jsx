import React from 'react'
import Input from '../../components/Input.jsx'
import Button from '../../components/Button.jsx'


export default function Signup(){
return (
<form className="grid" style={{maxWidth:520}} onSubmit={e=>e.preventDefault()}>
<h2>Create your business page</h2>
<Input label="Your name" required />
<Input label="Business name" required />
<Input label="Email" type="email" required />
<Input label="Phone" type="tel" required />
<Button>Create account</Button>
</form>
)
}
