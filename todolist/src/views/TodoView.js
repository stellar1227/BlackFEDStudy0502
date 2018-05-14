import React, { Component } from 'react';
// import styled from 'styled-components';

import Layout from '../styles/Layout';
import List from '../components/List';
import InputBox from '../components/InputBox';

class TodoView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Layout>
                <List />
                <InputBox/>
            </Layout>
        );
    }
};

export default TodoView;