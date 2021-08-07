import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Breadcrumb, Card } from 'antd';



const { Content } = Layout;

function Dash() {


  return (
        <>
          <Breadcrumb style={{ margin: '20px 16px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
            }}
          >
          <Card title="Inventory Statistics">
            <Card.Grid style={{width: '50%', textAlign: 'center'}}>
              Products
            </Card.Grid>
            <Card.Grid style={{width: '50%', textAlign: 'center'}}>
              Categories
            </Card.Grid>
          </Card>
          <Card title="Categories">
            <Card.Grid style={{width: '100%', textAlign: 'center'}}>
              Categories
            </Card.Grid>
          </Card>
          </Content>
        </>

  );
}

export default Dash;
// export default withAuthenticator(Dash);