import React from 'react'

export const TableElem = ({weight, height, amount}) => {
    return (
        <tr>
            <td> {weight} </td>
            <td> {height} </td>
            <td> {amount} </td>
        </tr>
    )
}