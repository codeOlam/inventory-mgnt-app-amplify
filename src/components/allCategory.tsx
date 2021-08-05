import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify';
import { Category } from "../models";
import sortBy from 'lodash/sortBy';

function Categories(){
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() =>{
        DataStore.query(Category).then(
            (categories)=> setCategories(sortBy(categories, 'createdAt'))
        )
    })

    return(
        <div>
            <h1>All Category</h1>
            {
                categories.map(cat => (
                    <li>{cat.name}</li>)
                )
            }
        </div>
    )
}

export default Categories