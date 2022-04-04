import {useState} from 'react'

export const GroceryInput = ({handleAdd}) => {
    const [text, setText] = useState("");
    return (
        <div>
            <input type="text" placeholder="Add Something" value={text} onChange = {((e) => {
                setText(e.target.value)
            })}/>
            <button onClick = {() => {
                handleAdd(text)
            }}>Add</button>
        </div>
    )
}