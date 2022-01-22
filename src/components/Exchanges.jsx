import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar, Card } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;
const bold = { fontWeight: 'bold' };

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;

    if (isFetching) return <Loader />;

    if (!exchangesList) return (
        <Card style={{
            height: '85.75vh', display: 'flex', justifyContent: 'space-evenly',
            alignItems: 'center', flexDirection: 'column', flexWrap: 'nowrap'
        }}>
            <div>
                <Text style={{ fontWeight: 'bold', fontSize: 24, display: 'flex', textAlign: 'center' }}>
                    Exchanges is disabled due to API limitations...
                </Text>
            </div>
            <a
                href='https://developers.coinranking.com/api/documentation/exchanges'
                target='_blank'
                rel='noreferrer'
                style={{
                    color: '#0071bd', fontWeight: 'bold',
                    fontSize: 18, display: 'flex', justifyContent: 'center'
                }}
            >
                Coinranking API
            </a>
        </Card>
    );

    return (
        <>
            <Row>
                <Col span={6} style={bold}>Exchanges</Col>
                <Col span={6} style={bold}>24h Trade Volume</Col>
                <Col span={6} style={bold}>Markets</Col>
                <Col span={6} style={bold}>Change</Col>
            </Row>
            <Row>
                {exchangesList && exchangesList?.map((exchange) => (
                    <Col span={24} key={exchange?.id}>
                        <Collapse>
                            <Panel
                                key={exchange?.id}
                                showArrow={false}
                                header={(
                                    <Row key={exchange?.id}>
                                        <Col span={6}>
                                            <Text><strong>{exchange?.rank}.</strong></Text>
                                            <Avatar className="exchange-image" src={exchange.iconUrl} alt="" />
                                            <Text><strong>{exchange?.name}</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(exchange?.volume)}</Col>
                                        <Col span={6}>{millify(exchange?.numberOfMarkets)}</Col>
                                        <Col span={6}>{millify(exchange?.marketShare)}%</Col>
                                    </Row>
                                )}
                            >
                                {HTMLReactParser(exchange?.description || '')}
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Exchanges;