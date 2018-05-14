import React, { Fragment } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const Layout = styled.section`
 max-width:700px;
 min-width:600px;
 margin:0 auto;
 background:#c2f6c6;
 box-sizing:border-box;
 padding:50px;
    & > div{
        background:#fff;
        border-radius:16px
    }
`;

const LayoutComponent = (props) => {
    const { children } = props;
    return (
        <Layout>
            <div>
                <Header />
                {children}
            </div>
        </Layout>
    );
};

export default LayoutComponent;