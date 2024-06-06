import { lazy } from "react";
export const Layout = lazy(()=>import("../Layout/Layout"))
export const Todo = lazy(()=>import("../pages/Todo/Todo"))
export const TodoById = lazy(()=>import("../pages/TodoById/TodoById"))