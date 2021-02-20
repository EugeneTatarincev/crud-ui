import React, { useState } from 'react'
import {useHttp} from '../../hooks/http.hook'

export const TableElem = ({age, email, name, onDelete, id, fetchData}) => {
    const [read, setRead] = useState(true)
    const [values, setValues] = useState({
        age,
        email,
        name
    })
    const {request} = useHttp()

    const handleChange = (e) => {
        const {value, name} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleClick = () => {
        setRead(false)
    }

    const handleSave = async () => {
        try {
            const fetched = await request(`http://178.128.196.163:3000/api/records/${id}`, 'POST', {data: values})
            console.log(fetched)
            setRead(true)
            fetchData()
        } catch (e) { console.log(e.message)}
    }

    return (
        <tr>
            <td> <input type="number" name="age" value={values.age} readOnly={read} onChange={handleChange} /> </td>
            <td> <input type="email" name="email" value={values.email} readOnly={read} onChange={handleChange} /> </td>
            <td> <input type="text" name="name" value={values.name} readOnly={read} onChange={handleChange} /> </td>
            <td> <button className="delete" onClick={() => {onDelete(id)}}> Delete </button> </td>
            <td> { read ? <button className="change" onClick={handleClick}> Change </button> : <button className="save" onClick={handleSave} > Save </button> } </td>
        </tr>
    )
}