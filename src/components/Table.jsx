import React from 'react'
export default function Table({columns, rows}){
return (
<table className="table">
<thead><tr>{columns.map(c=> <th key={c.key}>{c.header}</th>)}</tr></thead>
<tbody>
{rows.map((r,i)=> (
<tr key={i}>{columns.map(c=> <td key={c.key}>{r[c.key]}</td>)}</tr>
))}
</tbody>
</table>
)
}
