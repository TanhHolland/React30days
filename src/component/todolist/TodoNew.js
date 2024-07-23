import { useState } from "react";
const TodoNew = (props) => {
    const [item, setItem] = useState("");
    return (
        <>
            <input value={item} onChange={(e) => setItem(e.target.value)}></input>
            <button
                type="submit"
                onClick={() => {
                    props.addNew(item);
                    setItem("")
                }}
            >
                Add
            </button>
        </>
    );
};
export default TodoNew;