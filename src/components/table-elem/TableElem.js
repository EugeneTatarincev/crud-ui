import React from 'react'

export const TableElem = ({age, email, name, onDelete, id}) => {
    return (
        <tr>
            <td> {age} </td>
            <td> {email} </td>
            <td> {name} </td>
            <td> <button className="delete" onClick={() => {onDelete(id)}}> Delete </button> </td>
        </tr>
    )
}