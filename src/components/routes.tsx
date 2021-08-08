import React, { useEffect } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

import HeaderMenu from './headerMenu';
import SiderNav from './sider';
import Dash from './dashboard';
import AllCategory from '../pages/category-pages/allCategories';
import AllProduct from '../pages/product-pages/allProducts';
import InStockProduct from '../pages/product-pages/availableProducts';
import OutStockProduct from '../pages/product-pages/soldProduct';





function Router () {
    useEffect(() => {
        Auth.currentUserInfo().then((data) => {
          console.log(`user data >`, JSON.stringify(data, null, 2))
        })
      }, [])

    return(
        <HashRouter>
            <Layout>
                <HeaderMenu />
                <Layout>
                    <SiderNav />
                <Layout className="site-layout">
                    <Switch>
                        <Route exact path="/" component={Dash} />
                        <Route exact path="/allproducts" component={AllProduct} />
                        <Route exact path="/allcategories" component={AllCategory} />
                        <Route exact path="/availableProducts" component={InStockProduct} />
                        <Route exact path="/soldProducts" component={OutStockProduct} />
                    </Switch>
                </Layout>
                </Layout>    
            </Layout>
        </HashRouter>
    )
}

export default withAuthenticator(Router)