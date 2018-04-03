import React, { Component } from 'react';
import { connect } from 'react-redux';
import socketIOClient from "socket.io-client";
const date= new Date()
const socket = socketIOClient("http://127.0.0.1:3002");


class ChatBox extends Component {
    constructor(props){
        super(props);
        var user = "user_"+ date.toISOString()
	    this.state = {
            user: user
        };
        socket.emit('userJoined', user);
	}
    componentWillReceiveProps(props){
        socket.on('newmsg', function (data) {
            console.log("message  showing")
            console.log(data)
            //Send message to everyone
          })
    }
    submitfunction(e) {
        e.preventDefault()
        console.log(e.target.typeMessage.value)
        var msg = e.target.typeMessage.value
        var user = this.state.user
        if (msg) {
            socket.emit('msg', { message: msg, user: user });
            // this.setState({
            //     msgData:
            // })
        }
    }
    notifyTyping(e) {
        e.preventDefault()
        socket.emit('typingOn', "type_on");
        console.log("notify")
    }

    render() {
        var msgData
        return (
            <div>
                <ul id="messages">{msgData}</ul>
                <span id="notifyUser"></span>
                <form id="form" action="" onSubmit={this.submitfunction.bind(this)} >
                    <input type="hidden" id="user" value="" />
                    <input id="m" name="typeMessage" onKeyUp={this.notifyTyping.bind(this)} placeholder="Type yor message here.." />
                    <input type="submit" id="button" value="Send" />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(ChatBox);