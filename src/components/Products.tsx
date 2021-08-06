import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify';
import { Product, Category } from "../models";
import {Button, Input} from 'antd';
import TextArea from "antd/lib/input/TextArea";


const initialState ={
    name: '',
    description: '',
    categoryId: '',
    price: 0.0,
    inStock: true
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
            categoryId: formState.categoryId,
            price: +formState.price,
            inStock: formState.inStock as unknown as string === 'true' ? true:false,
        }))
        setFormState(initialState)
    }

    function onChange(e: { target: targetInput }){
        setFormState({...formState, 
                    [e.target.name]: e.target.value,
                })
    }
    //Add new category end logic


    //Query all category logic begins
    async function fetchProducts(){
        const products = await DataStore.query(Product)
        console.log(products)
        setProducts(products)
    }
    //End query

    //Edit category logic begins
    interface editInput{
        id: string;
        name: string;
        value: any;
    }

    //Creating some helper functions
    //toggle function
    const onToggle = async (id: string) => {
        const product = await DataStore.query(Product, id)
        setToggleForm(!toggleForm)
        setEditFormState(product!)
    }

    function onEdit(e: { target: editInput }){
        setEditFormState({...editFormState, [e.target.name]: e.target.value})
    }

    async function editProduct(
        id: string, 
        name: string,
        description: string,
        categoryId: string,
        price: number,
        inStock: boolean){
        const product = await DataStore.query(Product, id)
        console.log('product data to be edited: ', product)
        setEditFormState(initialState)

        try{
            await DataStore.save(
                Product.copyOf(product!, edited=>{
                    edited.name = name
                    edited.description = description
                    edited.categoryId = categoryId
                    edited.price = +price
                    edited.inStock = inStock
                })
            )
            console.log(`${product?.name}, successfully updated to ${name}`)

        }catch(error){
            console.log('Could not Edit: ', error)
        }
    }
    //End Edit  

    //Delete logic
    async function deleteProduct(id: string){
        try{
            const product = await DataStore.query(Product, id)
            console.log(`product to be deleted is: ${product?.name}`)
            DataStore.delete(product!)
            console.log(`${product?.name} has been removed successfully`)
        }catch(error){
            console.log(`error deleting ${Product.name}`)
        }
        
    }
    //end delete logic

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
                        <Button type='primary' 
                        onClick={() => onToggle(item.id)}
                    >Edit</Button>
                    
                    {
                        toggleForm && (
                            <div>
                            <Input 
                                onChange={onEdit}
                                name='name'
                                value={editFormState.name}
                            />
                            <TextArea 
                                onChange={onEdit}
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
                            <Button type='primary' onClick={() => 
                                editProduct(item.id, 
                                            editFormState.name,
                                            editFormState.description,
                                            editFormState.categoryId,
                                            editFormState.price,
                                            editFormState.inStock)}>Save</Button>
                            </div>
                        )
                    }
                    <Button type='primary' 
                        onClick={() => deleteProduct(item.id)}>
                            Remove</Button>                      
                    </div>
                ))
            }
        </div>
    )

}

export default Products