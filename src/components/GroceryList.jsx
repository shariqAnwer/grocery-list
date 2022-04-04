// import {handleDelete} from './Grocery'
import {Grocery} from './Grocery'

export const GroceryList = ({grocery, handleDelete}) => { 
    return <div>
    <span>{grocery.title}</span> 
    <button onClick={() => handleDelete(grocery.id)}>Delete</button>
    </div>
    
}