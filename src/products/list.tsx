import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify';
import { Product } from "../models";
import { Table, Spin, Tag} from "antd";
import { DeleteTwoTone} from "@ant-design/icons";

import UpdateProd from "./update";

function ListProd(){
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    //Query all category logic begins
    async function fetchCategories(){
        const products = await DataStore.query(Product)
        console.log('all products: ', products)
        setLoading(false);
        setProducts(products)
    }

    useEffect(() =>{
        fetchCategories()
        const subscription = DataStore.observe(Product).subscribe(
            () => fetchCategories())
            return () => subscription.unsubscribe()
    }, [])

    async function deleteProduct(id: string){
        console.log('item id:', id)

        try{
            const product = await DataStore.query(Product, id)
            console.log(`category to be deleted is: ${product?.name}`)
            DataStore.delete(product!)
            console.log(`${product?.name} has been removed successfully`)
        }catch(error){
            console.log(`error deleting ${Product.name}`)
        }
        
    }

    const columns = [
        {title: 'Name', dataIndex: 'name', key: 'name'},
        {title: 'Description', dataIndex: 'description', key: 'description'},
        {title: 'Price', dataIndex: 'price', key: 'price'},
        {
            title: 'is Available?', 
            dataIndex: 'inStock', 
            key: 'inStock',
            render: (inStock: boolean) =>(
                <>
                    {
                        inStock ? 
                            <Tag color="green" > In Stock </Tag> : 
                            <Tag color="volcano">Out of Stock</Tag> 
                    }
                </>
            )
        },
        {title: 'Category', dataIndex: 'category', key: 'category'},
        {title: 'Actions', dataIndex: 'operation', key: 'operation'},
    ];

    const data = products?.map(row => ({
        name: row.name,
        description: row.description,
        price: row.price,
        inStock: row.inStock,
        category: row.category?.name,
        operation: <><a onClick={() => deleteProduct(row.id)}><DeleteTwoTone/></a>
        <UpdateProd id={row.id} />
        </>
    }))

    return (
        <div>
            {loading && <Spin tip='loading...' size='large'/>}    
            <Table 
                columns={columns}
                dataSource={data}
            />
        </div>  
    )  
}

export default ListProd