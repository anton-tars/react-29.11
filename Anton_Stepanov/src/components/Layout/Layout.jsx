import React, {Component} from "react";
import PropTypes from "prop-types";
import {Header} from "../Header/Header"
import {ChatList} from "../../containers/ChatList/ChatList"
// import {ChatForm} from "../ChatForm/ChatForm"
import {MessageField} from "../MessageField/MessageField"
import("./Layout.css");

export class Layout extends Component {

    sendMessage = (message) => {
        this.props.onSendMessage(message);
    };

    render() {
        return (
            <div className="layout">
                <div className="header">
                    <Header chatId={ this.props.chatId } />
                </div>
                <div className="messenger-content">
                    <div className="chat-list">
                        <ChatList 
                            chatId={ this.props.chatId } 
                            chats={ this.props.chats }
                            push={ this.props.push }
                            onCreateChat={this.props.onCreateChat}
                        />
                        {/* <ChatForm onCreateChat={ this.createChat } /> */}
                    </div>
                    <div className="messages-list">
                        <MessageField
                            chatId={ this.props.chatId }
                            chats={ this.props.chats }
                            messages={ this.props.messages } 
                            onSendMessage={ this.sendMessage }
                        />
                    </div>
                </div>
            </div>
        );
    }
}