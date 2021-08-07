import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify';
import { Category } from "../models";
import { 
    Layout, 
    Breadcrumb, 
    Table, 
    Tag, 
    Spin,
    Popconfirm, 
    Popover} from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

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

    const columns = [
        {title: 'Name', dataIndex: 'name', key: 'name'},
        {title: 'CreatedAt', dataIndex: 'createdAt', key: 'createdAt'},
        {title: 'UpdatedAt', dataIndex: 'updatedAt', key: 'updatedAt'},
        {
            title: 'Actions', 
            dataIndex: '', 
            key: 'x', 
            render: () =><>
            <Popconfirm title="Confirm item removal?" key='x'><a><DeleteTwoTone /></a></Popconfirm>
            <Popover content="Update item status" key='x'> <a><EditTwoTone /></a></Popover>
            </>
        },
    ];

    const data = categories?.map(row => ({
        name: row.name,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt
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

export default ListCate