import React from 'react'

export const TableElem = ({age, email, name}) => {
    return (
        <tr>
            <td> {age} </td>
            <td> {email} </td>
            <td> {name} </td>
            <td> <button className="delete"> Delete </button> </td>
        </tr>
    )
}