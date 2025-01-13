import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ChattingService} from '../../../services/chatting.service';
import {Subject} from 'rxjs';
import {Message} from '../../../models/message.model';

@Component({
    selector: 'app-chatting',
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './chatting.component.html',
    styleUrl: './chatting.component.scss'
})
export class ChattingComponent implements OnInit {
  chatGroup: FormGroup;
  messages: string[] = []

  constructor(private formBuilder: FormBuilder, private chattingService: ChattingService) {
    this.chatGroup = this.formBuilder.group({
      username: new FormControl(''),
      message: new FormControl(''),
    })
    this.chattingService.message.subscribe(message => {
      //const mes = JSON.parse(message)
      this.messages.push(message)
    })
  }

  ngOnInit() {

  }

  sendMessage() {
    const username = this.chatGroup.value.username;
    const message = this.chatGroup.value.message;
    this.chattingService.sendMessage(username, message)
    this.chatGroup.reset()
  }

  close() {
    this.chattingService.close()
  }
}
