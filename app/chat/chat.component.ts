import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from "nativescript-plugin-firebase"
@Component({
  selector: 'app-chat',
  templateUrl: './chat/chat.component.html',
  styleUrls: ['./chat/chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatList: Array<object> = []
  message: string
  chatCollection: firebase.firestore.CollectionReference
  user: firebase.User
  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.chatCollection = firebase.firestore.collection("chat");
    firebase.getCurrentUser().then(user => this.user = user)
    this.loadMessages();
  }
  loadMessages() {
    this.chatCollection.orderBy("time", "asc").onSnapshot(snapshot => {
      {
          this.chatList = []

        this.zone.run(() => snapshot.forEach(message =>
          this.chatList.push(message.data())
        ))
      }

    })
  }
  send() {
    this.chatCollection.add({
      message: this.message,
      author: this.user.uid,
      time: new Date()
    })
    this.message = "";

  }
  clear(){
    this.chatCollection.get().then((items)=>{
      items.forEach(item=>this.chatCollection.doc(item.id).delete())
    })
  }
}
