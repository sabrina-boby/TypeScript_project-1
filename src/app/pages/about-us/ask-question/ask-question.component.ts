import { Component } from '@angular/core';
import { ASK_QUESTION_DB } from 'src/app/core/db/ask-question.db';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent {
  items: any[] = ASK_QUESTION_DB;


  // isShow: any = false;
  // handle_toggle() {
  //   this.isShow = !this.isShow;
  // }


  // toggle: boolean[] = [];
  // handleClick(index: number) {
  //   this.toggle[index] = !this.toggle[index];
  // }


  toggle: boolean[] = [];
  handleClick(index: number) {
    this.toggle[index] = !this.toggle[index];
    // console.log(this.items[index]);
    for (let x in this.items) {
      // if (0 == 1) {

      // }
    }
  }

  
}
