import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  title: string = '';
  message: string = '';

  @Input() formTitle: string;
  @Output() onComplete: EventEmitter<Message> = new EventEmitter<Message>();

  constructor() { }

  ngOnInit(): void {
  }

  get hasMessage():boolean {
    return this.title.length > 0 && this.message.length > 0;
  }

  onSubmit(): void {
    this.onComplete.emit({ title: this.title, body: this.message });
    this.title = this.message = '';
  }

}
