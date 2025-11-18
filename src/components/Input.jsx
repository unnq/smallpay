import React from 'react'
export default function Input({label, ...rest}){
return (
<label>
<span className="label">{label}</span>
<input className="input" {...rest} />
</label>
)
}
