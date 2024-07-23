import { useState } from "react";
import TodoList from "./TodoList";
import TodoNew from "./TodoNew";
const MainTodolist = () => {
    const [data, setData] = useState(["1"]);
    const addNew = (item) => {
        setData([...data, item]);
    };
    const deleteItem = (item) => {
        setData(
            data.filter((x) => {
                return x !== item;
            })
        );
    };
    return (
        <>
            <TodoNew addNew={addNew}></TodoNew>
            <TodoList data={data} deleteItem={deleteItem}></TodoList>
        </>
    );
}
export default MainTodolist;