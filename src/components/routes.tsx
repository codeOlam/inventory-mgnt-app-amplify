import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import HeaderMenu from './headerMenu';
import SiderNav from './sider';



function Router () {

    return(
        <HashRouter>
            <Layout>
                <HeaderMenu />
                <Layout>
                    <SiderNav />
                <Layout className="site-layout">
                    <Switch>
                        <Route exact path="/" component={Dash} />
                        <Route exact path="/allproducts" component={Products} />
                    </Switch>
                </Layout>
                </Layout>    
            </Layout>
        </HashRouter>
    )
}

export default Router