import React from 'react'
import Input from '../../components/Input.jsx'
import Button from '../../components/Button.jsx'


export default function Login(){
return (
<form className="grid" style={{maxWidth:420}} onSubmit={e=>e.preventDefault()}>
<h2>Log in</h2>
<Input label="Email" type="email" required />
<Input label="Password" type="password" required />
<Button>Log in</Button>
</form>
)
}
