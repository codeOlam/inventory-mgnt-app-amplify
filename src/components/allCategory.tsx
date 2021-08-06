import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify';
import { Category } from "../models";
import {Button, Input} from 'antd';
// import sortBy from 'lodash/sortBy';

const initialState ={
    name: ''
}

interface targetInput {
    name: string;
    value: string
}

function Categories(){
    const [categories, setCategories] = useState<Category[]>([])
    const [formState, setFormState] = useState(initialState)

    //This function handles adding of new category
    async function addCategory(){
        if (!formState) return
        await DataStore.save(new Category({...formState}))
        setFormState(initialState)
    }

    function onChange(e: { target: targetInput }){
        setFormState({... formState, [e.target.name]: e.target.value})
    }
    //Add new category end logic

    //Query all category logic begins
    async function fetchCategories(){
        const categories = await DataStore.query(Category)
        setCategories(categories)
    }
    //End query

    useEffect(() =>{
        // DataStore.query(Category).then(
        //     (categories)=> setCategories(sortBy(categories, 'createdAt'))
        // )
        fetchCategories()
        const subscription = DataStore.observe(Category).subscribe(
            () => fetchCategories())
            return () => subscription.unsubscribe()
    }, [])

    return(
        <div>
            <h2>Add New Category</h2>
            <Input 
                onChange={onChange}
                name='name'
                placeholder="Category Name"
                value={formState.name}
            />
            <Button type="primary" onClick={addCategory}>Add Category</Button>
            <h1>All Category</h1>
            {
                categories.map(cat => (
                    <div key={cat.id}> 
                    <li>{cat.name}</li>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default Categories