import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from './message';

const messages: Message[] = [
  { title: 'A title', body: 'Some sort of message body.' },
];

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private cachedMessages: Message[] = [{
    title: 'First Message',
    body: 'The first body of the message.',
  }];

  private messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>(this.cachedMessages);

  constructor() { }

  public publish(message: Message): void {
    this.cachedMessages.push(message);
    this.messages.next(this.cachedMessages);
  }

  public getMessages(): BehaviorSubject<Message[]> {
    return this.messages;
  }
}
