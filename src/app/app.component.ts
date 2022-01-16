import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';
import { OnInit } from '@angular/core';
export interface todolists{
mylists:''
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todolist';
  elementdata:todolists[]=[

  ]
  myform = {
    mylist: '',
  }
  constructor(private localStorageService: LocalStorageService){}
  public result : string | undefined;
 todolistForm = new FormGroup({
    mylist: new FormControl('', [Validators.required]),
  });
  
  save(){

   this.elementdata.push(this.todolistForm.value.mylist);
    console.log({item: this.elementdata,id:this.elementdata.length});
    localStorage.setItem('mydata',JSON.stringify(this.todolistForm.value));
    this.result=JSON.parse(localStorage.getItem('mydata')|| '{}');
    console.log(this.result);
    fetch('http://localhost:5002/api/todo/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(this.todolistForm.value)

    }).then(function (res: any) {
      if (res.status == 200) {
        console.log("data added successfully");
      }
      else {
        res.json().then(function (data: any) {
          console.log("something went wrong " + res.status);
        })
      }
    })
    
  
  }
  
   ngOnInit(): void {
     this.localStorageService.getUsers().subscribe(
      (res:any ) => {
        this.elementdata=Object.values(res);
        console.log("ppppppppppp",this.elementdata);
      },
      (err:any)=>{
        console.log(err);
      }
      )
      
   }
      
    delete(){
      this.elementdata=this.elementdata.filter(item=>this.elementdata.length!==this.elementdata.length)

      this.myform.mylist=this.todolistForm.value.mylist ;
      console.log("eeeeee"+this.myform.mylist)
    fetch("http://localhost:5002/api/todo/delete/" + this.myform.mylist, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(
      function (res) {
        if (res.status == 200) {
          console.log("Record is deleted successfully");
        }
        else {
          res.json().then(function (data) {
            alert("something went wrong " + res.status);
          })
        }

      })
    console.log(this.todolistForm.value);
  }
    //}
  }
