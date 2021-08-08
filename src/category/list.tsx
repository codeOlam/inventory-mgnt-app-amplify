import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify';
import { Category } from "../models";
import { Table, Spin} from "antd";
import { DeleteTwoTone} from "@ant-design/icons";

import UpdateCate from './update'
import AddCate from "./create";

function ListCate(){
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)

    //Query all category logic begins
    async function fetchCategories(){
        const categories = await DataStore.query(Category)
        setLoading(false);
        setCategories(categories)
    }

    useEffect(() =>{
        fetchCategories()
        const subscription = DataStore.observe(Category).subscribe(
            () => fetchCategories())
            return () => subscription.unsubscribe()
    }, [])

    async function deleteCategory(id: string){
        console.log('item id:', id)

        try{
            const category = await DataStore.query(Category, id)
            console.log(`category to be deleted is: ${category?.name}`)
            DataStore.delete(category!)
            console.log(`${category?.name} has been removed successfully`)
        }catch(error){
            console.log(`error deleting ${Category.name}`)
        }
        
    }

    const columns = [
        {title: 'Name', dataIndex: 'name', key: 'name'},
        {title: 'CreatedAt', dataIndex: 'createdAt', key: 'createdAt'},
        {title: 'UpdatedAt', dataIndex: 'updatedAt', key: 'updatedAt'},
        {title: 'Actions', dataIndex: 'operation', key: 'operation'},
    ];

    const data = categories?.map(row => ({
        name: row.name,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
        operation: <><a onClick={() => deleteCategory(row.id)}><DeleteTwoTone/></a><UpdateCate id={row.id} />
        </>
    }))

    return (
        <div>
            <AddCate/>
            {loading && <Spin tip='loading...' size='large'/>}    
            <Table 
                columns={columns}
                dataSource={data}
            />
        </div>  
    )  
}

export default ListCate