import React, {useEffect, useState} from "react";
import {DataStore} from 'aws-amplify';
import { Category, Product } from "../models";
import {Input, Form, Modal, Select, Switch} from 'antd';
import { EditTwoTone } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

const initialState ={
    name: '',
    price: 0.0,
}

interface EditProduct {
    id: string;
    name: string; 
    price: number;
    categoryID: string;
    description: string;
    inStock: boolean;
}

function UpdateProd({id}:{id: string}){
    const [categories, setCategories] = useState<Category[]>([]);
    const [editFormState, setEditFormState] = useState(initialState)
    const [visible, setVisible] = useState(false);


    async function onSetVisible(){
        const product = await DataStore.query(Product, id)
        console.log('product manipulated: ', product)
        setVisible(!visible)
        setEditFormState(product!)        
    }

    async function editProduct(
        id: string, 
        name: string,
        price: number,
        categoryID: string,
        description: string,
        inStock: boolean){
        const product = await DataStore.query(Product, id)
        console.log('product data to be edited: ',product)
        setEditFormState(initialState)

        try{
            await DataStore.save(
                Product.copyOf(product!, edited=>{
                    edited.name = name
                    edited.price = +price
                    edited.description = description
                    edited.inStock = inStock
                })
            )
            console.log(`${product?.name}, successfully updated`)

        }catch(error){
            console.log('Could not Edit: ', error)
        }
    }

    const onEdit = (values: any) => {
        console.log('Received values of form: ', values);
  
          try{
            editProduct(
                id as string,
                values.name as string,
                values.price as number,
                values.categoryID as string,
                values.description as string,
                values.instock as boolean);
              setVisible(false);
          } catch(error){
              console.log('Error Editing Product: ', error);
          }
      };

    async function fetchCategories(){
        const categories = await DataStore.query(Category)
        setCategories(categories)
    }

    useEffect(() =>{
        fetchCategories()
    }, [])      

    const ProductEditForm = ({ visible, onEdit, onCancel }: any) => {
        const [form] = Form.useForm();

        return (
          <Modal
            visible={visible}
            title="Edit Product Entry"
            okText="Save"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
              form
                .validateFields()
                .then((values) => {
                //   form.resetFields();
                onEdit(values);
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
                initialValue={editFormState.name}
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
                initialValue={editFormState.price}
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
          <a
            type="primary"
            onClick={() => {onSetVisible()}}
          ><EditTwoTone/></a>
          <ProductEditForm
            visible={visible}
            onEdit={onEdit}
            onCancel={() => {setVisible(false);}}
          />
        </>
    )
}

export default UpdateProd