import React, { useState } from 'react'
import { TableElem } from '../table-elem/TableElem'
import './Table.css'

export const Table = () => {
    const [data, setData] = useState({
        array: [{weight: 20, height: 120, amount: 2}, {weight: 10, height: 100, amount: 1}]
    })
    return (
      <table className="table-main">
          <tr>
              <th> Вес </th>
              <th> Рост </th>
              <th> Количество </th>
          </tr>
          {data.array.map(({weight, height, amount}) => <TableElem weight={weight} height={height} amount={amount}/>)}
      </table>
    )
}
  