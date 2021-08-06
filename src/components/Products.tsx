import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify';
import { Product, Category } from "../models";
import {Button, Input} from 'antd';
import TextArea from "antd/lib/input/TextArea";
import { ConsoleLogger } from "@aws-amplify/core";


const initialState ={
    name: '',
    description: '',
    categoryID: '',
    price: 0.0,
    inStock: undefined
}

interface targetInput {
    id: string;
    name: string;
    value: any;
}


function Products(){
    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [formState, setFormState] = useState(initialState)
    const [editFormState, setEditFormState] = useState(initialState)
    const [toggleForm, setToggleForm] = useState(false)


    //This function handles adding of new product
    async function addProduct(){
        if (!formState) return
        await DataStore.save(new Product({
            name: formState.name,
            description: formState.description,
            categoryId: formState.categoryID,
            price: +formState.price,
            inStock: formState.inStock === 'true' ? true:false,
        }))
        setFormState(initialState)
    }

    function onChange(e: { target: targetInput }){
        setFormState({...formState, 
                    [e.target.name]: e.target.value,
                })
        console.log({...formState})
        console.log({name: formState.name})
        console.log(formState.name)
        console.log(formState.description)
        console.log(formState.categoryID)
        console.log(formState.price)
        console.log({price: +formState.price})
        console.log(formState.inStock)
        console.log({inStock: formState.inStock === 'true' ? true:false})
        
    }
    //Add new category end logic


    //Query all category logic begins
    async function fetchProducts(){
        const products = await DataStore.query(Product)
        console.log(products)
        setProducts(products)
    }
    //End query

    useEffect(() =>{
        fetchProducts()
        getCate()
        const subscription = DataStore.observe(Product).subscribe(
            () => fetchProducts())
            return () => subscription.unsubscribe()
    }, [])

    //get category for product add selection
    const getCate = async () =>{
        const categories = await DataStore.query(Category)
        setCategories(categories)
    }

    return(
        <div>
            <h2>Add New Product</h2>
            <Input 
                onChange={onChange}
                name='name'
                placeholder="Product Name"
                value={formState.name}
            />
            <TextArea 
                onChange={onChange}
                name='description'
                placeholder="Product Description"
                value={formState.description}
            />
            <Input 
                onChange={onChange}
                type="number"
                name='price'
                placeholder="$0.0"
                value={formState.price as number}
            />
            <select
                onChange={onChange}
                name='categoryID'
                placeholder="Category"
            >
                {
                    categories.map(cate => (
                        <option key={cate.id} value={cate.id}>{cate.name}</option>
                    ))
                }
            </select>
            <select
                onChange={onChange}
                name='inStock'
                aria-label='in Stock?'
            >
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <Button type="primary" onClick={addProduct}>Add Product</Button>

            <h1>All Products</h1>
            {
                products.map(item => (
                    
                    <div key={item.id}>
                        <ul>
                            Name: <li>{item.name}</li>
                            Description: <li>{item.description}</li>
                            Price: <li>{item.price}</li>
                            inStock: <li>{item.inStock? "Yes" : "No"}</li>
                            Category: <li>{item.category?.name}</li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )

}

export default Products