import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Space } from 'antd';
import { useWindowSize } from '../hooks/useWindowSize';

const { Title } = Typography;

const Footer = () => {
    const { width } = useWindowSize();
    const screenWidth = width <= 800;
    return (
        <>
            <Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                Copyright © {new Date().getFullYear()}{' '}
                {screenWidth && <br />}
                <a href="https://github.com/jonoman55/" target="_blank" rel="noreferrer">
                    John Chiappetta
                </a>
                {' / '}
                <Link to="/">
                    Cryptoverse
                </Link>
                {screenWidth && <br />}
                {' '}All Rights Reserved.
            </Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </Space>
        </>
    );
};
    
export default Footer;