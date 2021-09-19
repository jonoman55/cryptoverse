import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar, Footer } from './components';
import './styles/App.css';

const App = () => (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/exchanges" render={(props) => <Exchanges {...props} />} />
                        <Route path="/cryptocurrencies" render={(props) => <Cryptocurrencies {...props} />} />
                        <Route path="/crypto/:coinId" render={(props) => <CryptoDetails {...props} />} />
                        <Route path="/news" render={(props) => <News {...props} />} />
                    </Switch>
                </div>
            </Layout>
            <div className="footer">
                <Footer />
            </div>
        </div>
    </div>
);

export default App;