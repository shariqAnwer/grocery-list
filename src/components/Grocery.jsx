import {useState} from 'react'
import {GroceryInput} from './GroceryInput'
import {GroceryList} from './GroceryList'
import {nanoid} from 'nanoid'

export const Grocery = () => {
    const [groceries, setGroceries] = useState([]);
    const addGrocery = (data) => {
        const t = {
            id: nanoid(),
            title: data,
            status: false
        }
        setGroceries([...groceries, t])  
    }
    // const deleteGrocery = (id) => {
    //     setGroceries([])
    // }
    const handleDelete = (id) => {
        const updateDelete = groceries.filter((item) => item.id !== id);
        setGroceries(updateDelete);
    }
    return (
        <div>
            <GroceryInput handleAdd = {addGrocery}/>
            {groceries.map((e) => (
                <GroceryList grocery={e} key={e.id} 
                handleDelete = {handleDelete}
                />
            ))}
            
        </div>
    )
}