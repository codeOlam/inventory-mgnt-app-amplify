import React, {useEffect, useState} from "react";
import {DataStore} from '@aws-amplify/datastore';
import { Product } from "../../models";
import { Table, Spin, Tag, Breadcrumb, Layout} from "antd";
import { DeleteTwoTone} from "@ant-design/icons";
import UpdateProd from "../../products/update";
import { Link } from "react-router-dom";

const { Content } = Layout;

function InStockProduct(){
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    //Query all category logic begins
    async function fetchCategories(){
        const products = await DataStore.query(Product)
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

    const data = products?.filter((row) => row.inStock).map(row =>({
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
        <>
        <Breadcrumb style={{ margin: '20px 16px' }}>
            <Breadcrumb.Item>
                <Link to={`/`}> Dashboard </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Available Products</Breadcrumb.Item>
        </Breadcrumb>
        <Content
            className="site-layout-background"
            style={{
            margin: '24px 16px',
            padding: 24,
            }}
        >
            {loading && <Spin tip='loading...' size='large'/>}    
            <Table 
                columns={columns}
                dataSource={data}
            />
        </Content>
        </>  
    )  
}

export default InStockProduct