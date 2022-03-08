import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info =  {
    nom: "Jessy Pango",
    email: 'kvnjessy@gmail.com',
    tel: '28484771'
  }
  profil =  {
    firstName:'Pango',
    lastName:'Jessy',
    fullName: "Jessy Pango",
    email: 'kvnjessy@gmail.com',
    tel: '28484771',
    img: 'assets/images/profil.png',
  }

  comments:any[] = []

  comment = {id:0, message:'', date:null, name:'Undefined',
    url: 'Angular.com'
  };
  newComment = false;

  constructor() { }

  ngOnInit(): void {
  }

  addComment() {
    if (this.comment.message != ''){
      this.comment.id++;
      this.comments.push({
        id:this.comment.id,
        message:this.comment.message,
        date: Date.now()
      });
      this.comment.message = '';
    }
  }
}
