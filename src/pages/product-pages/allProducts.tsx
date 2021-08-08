import { Table, Spin, Layout, Breadcrumb} from "antd";
import { Link } from "react-router-dom";

import AddProd from "../../products/create";
import ListProd from "../../products/list"; 

const { Content } = Layout;

function AllProduct(){

    return (
        <>
            <Breadcrumb style={{ margin: '20px 16px' }}>
                <Breadcrumb.Item>
                    <Link to={`/`}> Dashboard </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                }}
            >
                <AddProd/>
                <ListProd/>
            </Content>
        </>  
    )  
}

export default AllProduct