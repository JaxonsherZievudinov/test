import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from '../../reducers/todoSlice/todoSlice'

const TodoById = () => {
  let {id} = useParams()

  let dispatch = useDispatch()
  let data = useSelector((state)=>state.todo.data2)
  useEffect(()=>{
    dispatch(getById(id))
  })

  return (
    <div>
      {id}

<div>
  {data.images?.map(el=>{
    return (
      <img key={el.id} src={`http://65.108.148.136:8080/images/${el.imageName}`} alt="" />
    )
  })}
</div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  )
}

export default TodoById
