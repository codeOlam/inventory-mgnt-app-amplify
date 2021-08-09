import { Layout, Breadcrumb} from "antd";

import AddCate from "../../category/create";
import { Link } from "react-router-dom";
import ListCate from "../../category/list";

const { Content } = Layout;

function AllCategory(){

    return (
        <>
            <Breadcrumb style={{ margin: '20px 16px' }}>
                <Breadcrumb.Item>
                    <Link to={`/`}> Dashboard </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                }}
            >
                <AddCate/>
                <ListCate/>
            </Content>
        </>  
    )  
}

export default AllCategory