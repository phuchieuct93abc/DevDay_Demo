import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from "nativescript-plugin-firebase"
@Component({
  selector: 'app-chat',
  templateUrl: './chat/chat.component.html',
  styleUrls: ['./chat/chat.component.scss']
})
export class ChatComponent implements OnInit {
  messageList: Array<object> = []
  message: string
  chatCollection: firebase.firestore.CollectionReference
  user: firebase.User
  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.chatCollection = firebase.firestore.collection("chat");
    firebase.getCurrentUser().then(user => this.user = user)//Get current user
    this.loadMessages();
  }

  loadMessages() {
    //Load messages from firebase

  }
  sendMessage() {    
    //Send message to firebase
    
    this.message = "";

  }

}
