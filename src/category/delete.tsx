import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore"
import { Category } from "../models"
import { DeleteTwoTone } from "@ant-design/icons";

function DeleteCate(){
    const [categories, setCategories] = useState<Category[]>([])
    
    async function deleteCategory(id: string){
        try{
            const category = await DataStore.query(Category, id)
            console.log(`category to be deleted is: ${category?.name}`)
            DataStore.delete(category!)
            console.log(`${category?.name} has been removed successfully`)
        }catch(error){
            console.log(`error deleting ${Category.name}`)
        }
        
    }

    return(
        <div>
            <a
            {
                ...categories.map(cat => (
                    <a onClick={() => deleteCategory(cat.id)}>delete</a>
                    )
                )
            }> delete </a>
        </div>
    )
}

export default DeleteCate