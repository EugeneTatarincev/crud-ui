import React, { useState, useCallback, useEffect } from 'react'
import { TableElem } from '../table-elem/TableElem'
import {useHttp} from '../../hooks/http.hook'
import './Table.css'

export const Table = () => {
    const [data, setData] = useState([])

    const {loading, request} = useHttp()

    const fetchData = useCallback(async () => {
        try {
          const fetched = await request('http://178.128.196.163:3000/api/records')
          setData(fetched)
        } catch (e) {}
      }, [request])

    function handleClick () {
        setData({
            array: [...data.array ,{weight: 40, height: 220, amount: 3}]
        })
    }

    useEffect(() => {
        fetchData()
      }, [fetchData])

    return (
            <table className="table-main">
                <thead>
                    <tr>
                        <th> Age </th>
                        <th> Email </th>
                        <th> Name </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({data}) => <TableElem key={data.id} age={data.age} email={data.email} name={data.name}/>)}
                </tbody>

                <button className="add" onClick={handleClick}> Add </button> 
            </table>
    )
}
  