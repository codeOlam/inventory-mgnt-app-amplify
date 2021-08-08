import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify';
import { Category, Product } from "../models";
import {Input, Form, Modal, Button, Switch, Select} from 'antd';
import { AppstoreAddOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

function AddProd(){
    const [categories, setCategories] = useState<Category[]>([]);
    const [visible, setVisible] = useState(false);

    async function addProduct(
        name: string,
        price: number,
        categoryID: string,
        description?: string,
        inStock?: boolean,
        ){
        const input = {name, price, categoryID, description, inStock }
        try{
            await DataStore.save(new Product(input))
            console.log(`Added ${name} to Product Successfully`)
        }catch(err){
            console.log(`Error adding ${name} to Product`, err)
        }

    }

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        console.log('Values.id', values.id);
        console.log('Values.name', values.name);
        console.log('Values.price', values.price);
        console.log('Values.category', values.categoryID);
        console.log('Values.description', values.description);
        console.log('Values.inStock', values.inStock);
        
  
          try{
            addProduct(
                values.name as string,
                +values.price,
                values.categoryID as string,
                values.description as string,
                values.inStock as boolean,
                
                );
              setVisible(false);
          } catch(error){
              console.log('Error Adding new Product: ', error);
          }
      };

    async function fetchCategories(){
        const categories = await DataStore.query(Category)
        setCategories(categories)
    }

    useEffect(() =>{
        fetchCategories()
    }, [])

    const ProductAddForm = ({ visible, onCreate, onCancel }: any) => {
        const [form] = Form.useForm();

        return (
          <Modal
            visible={visible}
            title="Add New Product"
            okText="Add"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
              form
                .validateFields()
                .then((values) => {
                //   form.resetFields();
                onCreate(values);
                })
                .catch((info) => {
                  console.log('Validate Failed:', info);
                });
            }}
          >
            <Form
              form={form}
              layout="vertical"
              name="form_in_modal"
              initialValues={{
                modifier: 'public',
              }}
            >
              <Form.Item
                id = "name"
                name="name"
                label="Product Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input the product name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                id = "price"
                name="price"
                label=" Product Price"
                rules={[
                  {
                    required: true,
                    message: 'Please input the product price!',
                  },
                ]}
              >
                <Input />
                </Form.Item>
                <Form.Item
                id = "description"
                name="description"
                label="Product description"
              >
                <TextArea />
              </Form.Item>
              <Form.Item 
                id="inStock" 
                name="inStock" 
                label="In Stock?"
                initialValue="false"
                valuePropName="true">
                <Switch 
                />
            </Form.Item>
            <Form.Item 
                id="categoryID" 
                name="categoryID" 
                label="Select Category">
                <Select>
                  {
                    categories?.map(option => (
                      <Select.Option
                        key={option.id}
                        value={option.id}
                      >
                        {option.name}
                    </Select.Option>
                    ))
                  } 
                </Select>
              </Form.Item>              
            </Form>
          </Modal>
        );
      };

    return (
        <>
            <Button 
            type="primary" 
            icon={<AppstoreAddOutlined />} 
            size='middle'
            onClick={() => {setVisible(true)}}>
            Add New Product
            </Button>
            <ProductAddForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {setVisible(false);}}
            />
        </>
    )
}

export default AddProd