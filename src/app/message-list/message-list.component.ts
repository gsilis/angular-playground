import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Message } from '../message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  public messages: Message[] = [];

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.getMessages()
      .subscribe((messages) => {
        this.messages = messages;
      });
  }
}
