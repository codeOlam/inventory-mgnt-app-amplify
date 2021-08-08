import React, {useState} from "react";
import {DataStore} from 'aws-amplify';
import { Category } from "../models";
import {Input, Form, Modal, Button} from 'antd';
import { AppstoreAddOutlined } from "@ant-design/icons";

function AddCate(){
    const [visible, setVisible] = useState(false);


    //This function handles adding of new category
    async function addCategory(name: string){
        try{
            await DataStore.save(new Category({name}))
            console.log(`Added ${name} to Category Successfully`)
        }catch(err){
            console.log(`Error adding ${name} to Category`)
        }

    }

    //Add new category end logic

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        console.log('Values.id', values.id);
        console.log('Values.name', values.name);
  
          try{
            addCategory(
                values.name as string);
              setVisible(false);
          } catch(error){
              console.log('Error Adding new Category: ', error);
          }
      };

    const CategoryAddForm = ({ visible, onCreate, onCancel }: any) => {
        const [form] = Form.useForm();

        return (
          <Modal
            visible={visible}
            title="Add New Category"
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
                label="Category Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input the category name!',
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
            <Button 
            type="primary" 
            icon={<AppstoreAddOutlined />} 
            size='middle'
            onClick={() => {setVisible(true)}}>
            Add New Category
            </Button>
            <CategoryAddForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {setVisible(false);}}
            />
        </>
    )
}

export default AddCate