import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify';
import { Product } from "../models";
import {Button, Input} from 'antd';

const initialState ={
    name: '',
    categoryID: '',
    price: 0.0,
    inStock: false,
    category: '',
}

interface targetInput {
    id: string;
    name: string;
    categoryID: string;
    price: number;
    inStock: boolean;
    category?: any;
}


function Products(){
    const [products, setProducts] = useState<Product[]>([])
    const [formState, setFormState] = useState(initialState)
    const [editFormState, setEditFormState] = useState(initialState)
    const [toggleForm, setToggleForm] = useState(false)

    //Query all category logic begins
    async function fetchProducts(){
        const products = await DataStore.query(Product)
        console.log(products)
        setProducts(products)
    }
    //End query

    useEffect(() =>{
        fetchProducts()
        const subscription = DataStore.observe(Product).subscribe(
            () => fetchProducts())
            return () => subscription.unsubscribe()
    }, [])

    return(
        <div>
            <h1>All Products</h1>
            {
                products.map(item => (
                    
                    <div key={item.id}>
                        <ul>
                            Name: <li>{item.name}</li>
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