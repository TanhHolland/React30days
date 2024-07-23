const TodoList = (props) => {
    return (
        <>
            <ul>
                {props.data.map((item, index) => {
                    return (
                        <div style={{ display: "flex" }}>
                            <li key={index}>{item}</li>
                            <button
                                onClick={() => {
                                    props.deleteItem(item);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
            </ul>
        </>
    );
};
export default TodoList;