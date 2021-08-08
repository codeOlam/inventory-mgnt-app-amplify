import React, {useState} from "react";
import {DataStore} from 'aws-amplify';
import { Category } from "../models";
import {Input, Form, Modal} from 'antd';
import { EditTwoTone } from "@ant-design/icons";

const initialState ={
    name: ''
}
interface editInput{
    id: string;
    name: string;
    value: string;
}

function UpdateCate({id}:{id: string}){
    const [editFormState, setEditFormState] = useState(initialState)
    const [visible, setVisible] = useState(false);


    async function onSetVisible(){
        const category = await DataStore.query(Category, id)
        console.log('category manipulated: ', category)
        setVisible(!visible)
        setEditFormState(category!)        
    }

    async function editCategory(id: string, name: string){
        const category = await DataStore.query(Category, id)
        console.log('category data to be edited: ',category)
        setEditFormState(initialState)

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

    function onChange(e: { target: editInput }){
        setEditFormState({...editFormState, [e.target.name]: e.target.value})
    }

    const onEdit = (values: any) => {
        console.log('Received values of form: ', values);
        console.log('Values.id', id);
        console.log('Values.name', values.name);
  
          try{
            editCategory(
                id as string,
                values.name as string);
              setVisible(false);
          } catch(error){
              console.log('Error Adding new product: ', error);
          }
      };

    const CategoryEditForm = ({ visible, onEdit, onCancel }: any) => {
        const [form] = Form.useForm();

        return (
          <Modal
            visible={visible}
            title="Edit Category"
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
                label="Category Name"
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
          <CategoryEditForm
            visible={visible}
            onEdit={onEdit}
            onCancel={() => {setVisible(false);}}
          />
        </>
    )
}

export default UpdateCate