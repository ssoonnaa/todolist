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
  user:any={};
 todolistForm = new FormGroup({
    mylist: new FormControl('', [Validators.required]),
  });
  typesOfLists=elementdata
  save(){
    //this.typesOfLists=this.todolistForm.value.mylist
    //console.log(this.todolistForm.value);
    this.typesOfLists.push(this.todolistForm.value.mylist);
    console.log({item: this.typesOfLists,id:this.typesOfLists.length})
  
    fetch('http://localhost:5002/api/todo/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(this.user)

      body: JSON.stringify(this.typesOfLists)

    }).then(function (res: any) {
      //console.log("DDDDDDDDD" + res.status);
      if (res.status == 200) {
        console.log("data added successfully");
      }
      else {
        res.json().then(function (data: any) {
          console.log("something went wrong " + res.status);
        })
      }
    })
      /*this.user=localStorage.setItem('mydata',JSON.stringify(this.todolistForm.value));
    this.addmultipleuser(this.user);
      }
    addmultipleuser(userss: any){
      
     let users =JSON.parse(localStorage.getItem('mydata')|| '{}');
  */
      }
    delete(){ 
           this.typesOfLists=this.typesOfLists.filter(item=>this.typesOfLists.length!==this.typesOfLists.length)
    }
  }
