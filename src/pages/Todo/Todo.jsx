import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  check,
  deleteImg,
  deleteTodo,
  getTodo,
  postImg,
  postTodo,
  putTodo,
  searchs,
  setDesc,
  setIdx,
  setName,
  setSearch,
} from "../../reducers/todoSlice/todoSlice";
import { Link } from "react-router-dom";
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
import { useMemo } from 'react';




const Context = React.createContext({
  name: 'Default',
});




const Todo = () => {
  let dispatch = useDispatch();
  const data = useSelector((state) => state.todo.data);

  const name = useSelector((state) => state.todo.name);
  const desc = useSelector((state) => state.todo.desc);
  const idx = useSelector((state) => state.todo.idx);
  const search = useSelector((state) => state.todo.search);

  const loading = useSelector((state) => state.todo.loading);

  let [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  console.log(data);

  let [modal, setModal] = useState(false);

  function postUser(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", e.target["name"].value);
    formData.append("description", e.target["desc"].value);
    let files = e.target["images"].files;
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    dispatch(postTodo(formData));
  }

  function addImg(e) {
    e.preventDefault();

    let formData = new FormData();
    let files = e.target["addImg"].files
    formData.append("ToDoId",idx)
    for(let i=0;i<files.length;i++) {
      formData.append("images",files[i])
    }
    dispatch(postImg(formData))
  }

 
 

 

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.success({
      message: 'Success',
      description: 'Data loaded successfully!',
    });
  };
  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );


  // useEffect(() => {
  //   if (!loading) {
  //     api.success({
  //       message: 'Success',
  //       description: 'Data loaded successfully!',
  //     });
  //   }
  // }, [loading, api]);

  {loading ? (
    openNotification()
  ) : ""
  }

  return (
    <>
    {contextHolder}

<div>
  <input value={search} onChange={(e)=>dispatch(setSearch(e.target.value))} type="search" placeholder="Search"/>
  <button onClick={()=>dispatch(searchs(search))}>Search</button>
</div>

      {modal ? (
        <div>
          <form onSubmit={postUser}>
            <input name="images" type="file" />
            <input name="name" type="text" />
            <input name="desc" type="text" />
            <button type="submit">ADD</button>
          </form>
        </div>
      ) : null}

      <button onClick={() => setModal(true)}>ADD</button>

      {data?.map((el) => {
        return (
          <div key={el.id}>
            <div>
              {el.images.map((el) => {
                return (
                  <div key={el.id}>
                    <img
                      src={`http://65.108.148.136:8080/images/${el.imageName}`}
                      alt=""
                    />
                    <button onClick={()=>dispatch(deleteImg(el.id))}>Delete Img</button>
                  </div>
                );
              })}
            </div>
            <Link to={`/todo/${el.id}`}><h1>{el.name}</h1></Link>
            <p>{el.description}</p>
            <button onClick={() => {setOpen(true),dispatch(setName(el.name),dispatch(setDesc(el.description),dispatch(setIdx(el.id))))} }>Edit</button>
            
            <button onClick={()=>dispatch(deleteTodo(el.id))}>Delete</button>

            <input onClick={()=>dispatch(check(el.id))} checked={el.isCompleted} type="checkbox" />

            <form onSubmit={addImg}>
              <input name="addImg" type="file" />
              <button onClick={()=>dispatch(setIdx(el.id))} type="submit">Add Img</button>
            </form>
          </div>
        );
      })}

      {open ? (
        <div>
          <input
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            type="text"
          />
          <input
            value={desc}
            onChange={(e) => dispatch(setDesc(e.target.value))}
            type="text"
          />
          <button onClick={()=>{dispatch(putTodo({id:idx,name:name,description:desc}))}}>Edit</button>
        </div>
      ) : null}
    </>
  );
};

export default Todo;
