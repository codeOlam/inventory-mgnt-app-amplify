import React, {useState} from "react";
import { Layout, Menu } from 'antd';
import { 
    ShoppingOutlined, 
    PieChartOutlined,
    FolderOutlined
  } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;


function SiderNav (){
  const [collapsed, setCollapsed]  = useState(false);
  console.log('collasped: ', collapsed)
  console.log('setCollasped: ', setCollapsed)

  const onCollapse= () => {
    setCollapsed(!collapsed)
    console.log('setCollapsed(!collasped): ', setCollapsed(!collapsed))
  }

      return(
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to={`/`}> Dashboard </Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<ShoppingOutlined />} title="Products">
              <Menu.Item key="3">
              <Link to={`/allproducts`}>All Products </Link>
              </Menu.Item>
              <Menu.Item key="4">
              <Link to={`/soldProducts`}>Sold Products</Link>
                </Menu.Item>
              <Menu.Item key="5">
              <Link to={`/availableProducts`}>Available Products</Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="6" icon={<FolderOutlined />}>
            <Link to={`/allcategories`}>All Categories </Link>
            </Menu.Item>

          </Menu>
        </Sider>
      )
  }

export default SiderNav;