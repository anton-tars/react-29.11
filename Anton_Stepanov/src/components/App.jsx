import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import initStore, {history} from '../utils/store';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import MessengerContainer  from "../containers/MessengerContainer"
import ProfileContainer from '../containers/ProfileContainer';

const { store, persistor } = initStore();

export class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <PersistGate loading={ null } persistor={ persistor }>
                    <ConnectedRouter history={history}>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path='/' component={ MessengerContainer } />
                                <Route exact path="/chat/:chatId" component={ MessengerContainer }/>
                                <Route exact path='/profile/' render={ () =>
                                    <ProfileContainer /> } />
                            </Switch>
                        </BrowserRouter>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        );
    }
}