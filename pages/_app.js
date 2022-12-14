import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';

const NodeBird = ({ Component }) =>{
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>Nodebird</title>
        </Head>
        <Component></Component>
        </>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}


export default NodeBird;