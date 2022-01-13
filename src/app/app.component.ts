import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface todolists{

  mylists:String;
}
const elementdata:todolists[]=[

]

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
  typesOfLists=elementdata
  save(){
    //this.typesOfLists=this.todolistForm.value.mylist
    //console.log(this.todolistForm.value);
    this.typesOfLists.push(this.todolistForm.value.mylist);
    console.log({item: this.typesOfLists,id:this.typesOfLists.length})
    }
    delete(){ 
           this.typesOfLists=this.typesOfLists.filter(item=>this.typesOfLists.length!==this.typesOfLists.length)
    }
  }
