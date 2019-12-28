import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List"
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { ChatForm } from "../../components/ChatForm/ChatForm"
import SendIcon from '@material-ui/icons/Send';
import("./ChatList.css");

export class ChatList extends Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        chats: PropTypes.object.isRequired,
    };

    handleNavigate = (link) => {
        this.props.push(link);
    };

    handleCreateChat = (name) => {
        this.props.onCreateChat(name)
    }

    render() {
        const chats = this.props.chats;
        const chatId = this.props.chatId
        const chatsList = [];
        for (let id in chats) {
            chatsList.push({
                key: id,
                link: "/chat/" + id + "/",
            });
        }
        
        return (
            <div className="items-list">
                <List>
                    {
                        chatsList.map((item) => (
                            <ListItem selected={chatId === item.key} button key={ item.key } onClick={ () => this.handleNavigate(`/chat/${item.key}/`) }>
                                <ListItemIcon>
                                    <SendIcon />
                                    <ListItemText primary={chats[item.key].name} />
                                </ListItemIcon>
                            </ListItem>
                        ))
                    }
                </List>
                <ChatForm onCreateChat={ this.handleCreateChat } />
            </div>
        )
    }
}