import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-componet',
  templateUrl: './pipe-componet.component.html',
  styleUrls: ['./pipe-componet.component.css']
})
export class PipeComponetComponent {
    title = 'my-first-app';
    birthday = new Date(1999, 7, 16);
    // todaydate = new Date();  
    jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
    months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
      'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

}
