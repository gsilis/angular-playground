import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from './message';

const messages: Messages[] = [
  { title: 'A title', body: 'Some sort of message body.' },
];

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages: Observable<Message[]> = new Observable<Message[]>();

  constructor() { }

  public publish(message: Message): void {

  }

  public getMessages(): Observable<Message[]> {
    return of(messages);
  }
}
