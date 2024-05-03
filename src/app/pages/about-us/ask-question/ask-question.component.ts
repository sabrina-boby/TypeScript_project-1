import { Component } from '@angular/core';
import { ASK_QUESTION_DB } from 'src/app/core/db/ask-question.db';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent {
  items: any[] = ASK_QUESTION_DB;



  isShow: any[] = [];
 

  constructor(){
    this.items.forEach(() => {
      // console.log(this.isShow);
      this.isShow.push(false);
    });
  }


  handle_toggle(index: any) {
    this.isShow[index] = !this.isShow[index];
    // console.log(this.isShow);
    for (let x in this.items) {
          if (x != index) {
            this.isShow[x] = false;
          }
        }
  }


  // toggle: boolean[] = [];
  // handleClick(index: number) {
  //   this.toggle[index] = !this.toggle[index];
  // }


  // toggle: boolean[] = [];
  // handleClick(index: any) {
  //   this.toggle[index] = !this.toggle[index];
  //   for (let x in this.items) {
  //     if (x != index) {
  //       this.toggle[x] = false;
  //     }
  //   }
  // }


}
