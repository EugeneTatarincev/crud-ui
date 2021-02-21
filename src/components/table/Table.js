import React, { useState, useCallback, useEffect } from 'react'
import { TableElem } from '../table-elem/TableElem'
import {useHttp} from '../../hooks/http.hook'
import './Table.css'

export const Table = () => {
    const [data, setData] = useState([])
    const [add, setAdd] = useState({
        age:'',
        email:'',
        name: ''
    })

    const { request } = useHttp()

    const fetchData = useCallback(async () => {
        try {
          const fetched = await request('http://178.128.196.163:3000/api/records')
          setData(fetched)
          console.log(fetched)
        } catch (e) {}
      }, [request])

    const handleAdd = async () => {
        try {
            const fetched = await request('http://178.128.196.163:3000/api/records', 'PUT', {data: add})
            console.log(fetched)
            fetchData()
            setAdd({
                age:'',
                email:'',
                name: ''
            })
        } catch (e) {}
    }

    const handleChange = (e) => {
        const {value, name} = e.target
        setAdd({
            ...add,
            [name]: value
        })
    }

    const handleDelete = async (id) => {
        try {
            const fetched = await request(`http://178.128.196.163:3000/api/records/${id}`, 'DELETE')
            console.log(fetched)
            fetchData()
        } catch (e) { console.log(e.message)}
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
                    {data.map(({data, _id}) => <TableElem key={_id} age={data.age} email={data.email} name={data.name} onDelete={handleDelete} id={_id} fetchData={fetchData}/>)}
                    <tr>
                        <td> <input type="number" name="age" onChange={handleChange} value={add.age} /> </td>
                        <td> <input type="email" name="email" onChange={handleChange} value={add.email} /> </td>
                        <td> <input type="text" name="name" onChange={handleChange} value={add.name} /> </td>
                    </tr>

                    <tr>
                       <td> <button className="add btn" onClick={handleAdd}> Add </button> </td> 
                    </tr>
            
                </tbody>
            </table>
    )
}
  