import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';   




  todolistForm = new FormGroup({
    mylist: new FormControl('', [Validators.required]),
  });
  save(){
    console.log(this.todolistForm.value);
    typesOfList:String
    }
  }
  
 
}
