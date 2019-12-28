import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Layout} from "../components/Layout/Layout"
import { push } from "connected-react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { createChat, setChatId } from "../actions/chatActions"
import { loadMessenger, sendMessage } from "../actions/messageActions"

class MessengerContainer extends Component {
    static propTypes = {
        chatId: PropTypes.number,
        push: PropTypes.func.isRequired,
    };

    componentDidMount() {
        if (Object.keys(this.props.chats).length == 0) {
            //Load default chats
            this.props.loadMessenger();
        }
    }

    handleSendMessage = (message) => {
        this.props.sendMessage(this.props.chatId, message)
    }

    handleCreateChat = (name) => {
        this.props.createChat(name)
    }

    render() {
        return <Layout 
            chatId={this.props.chatId}
            chats={this.props.chats}
            push={this.props.push}
            messages={this.props.messages}
            profile={this.props.profile}
            onSendMessage={this.handleSendMessage}
            onCreateChat={this.handleCreateChat}
        />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        chatId: state.messenger.chatId,
        chats: state.messenger.chats,
        messages: state.messenger.messages,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({loadMessenger, sendMessage, createChat, push, setChatId}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);