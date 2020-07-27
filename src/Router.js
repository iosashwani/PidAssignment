import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import OrderDetail from './OrderDetail'

const RouterComponent = function () {

    return (
        <Router>
            <Scene key="root">
                 <Scene key="orderdetail"
                    component={OrderDetail}
                    title="Rider detail"
                    initial
                />
            </Scene>
        </Router>
    )
}

export default RouterComponent

