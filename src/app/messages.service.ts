import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  private messages: Observable<Message[]> = new Observable<Message[]>(this.onSubscribe.bind(this));

  constructor() { }

  public publish(message: Message): void {
    debugger;
    console.log('Publishing from service', message);
  }

  public getMessages(): Observable<Message[]> {
    return this.messages;
  }

  public onSubscribe(subscriber) {
    console.log('Called', JSON.stringify(this.cachedMessages));
    return subscriber.next(this.cachedMessages);
  }
}
