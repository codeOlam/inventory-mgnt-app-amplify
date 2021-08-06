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
    const [editFormState, setEditFormState] = useState(initialState)
    const [toggleForm, setToggleForm] = useState(false)

    //This function handles adding of new category
    async function addCategory(){
        if (!formState) return
        await DataStore.save(new Category({...formState}))
        setFormState(initialState)
    }

    function onChange(e: { target: targetInput }){
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    //Add new category end logic

    //Query all category logic begins
    async function fetchCategories(){
        const categories = await DataStore.query(Category)
        setCategories(categories)
    }
    //End query

    //Edit category logic begins
    interface editInput{
        id: string;
        name: string;
        value: string;
    }

    function onEdit(e: { target: editInput }){
        setEditFormState({...editFormState, [e.target.name]: e.target.value})
    }

    async function editCategory(id: string, name: string){
        const category = await DataStore.query(Category, id)
        console.log('category data to be edited: ',category)
        setEditFormState(category!)

        try{
            await DataStore.save(
                Category.copyOf(category!, edited=>{
                    edited.name = name
                })
            )
            console.log(`${category?.name}, successfully updated to ${name}`)

        }catch(error){
            console.log('Could not Edit: ', error)
        }
    }
    //End Edit

    //Delete logic
    async function deleteCategory(id: string){
        try{
            const category = await DataStore.query(Category, id)
            console.log(`category to be deleted is: ${category?.name}`)
            // DataStore.delete(category)
        }catch(error){
            console.log(`error deleting ${Category.name}`)
        }
        
    }
    //end delete logic

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
                    <Button type='primary' 
                        onClick={() => setToggleForm(!toggleForm)}
                    >Edit</Button>
                    
                    {
                        toggleForm && (
                            <div>
                            <Input 
                                onChange={onEdit}
                                name='name'
                                value={editFormState.name}
                            />
                            <Button type='primary' onClick={() => editCategory(cat.id, editFormState.name)}>Save</Button>
                            </div>
                        )
                    }
                    <Button type='primary' 
                        onClick={() => deleteCategory(cat.id)}>Remove</Button>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default Categories
