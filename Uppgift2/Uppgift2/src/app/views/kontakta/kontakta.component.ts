import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakta',
  templateUrl: './kontakta.component.html',
  styleUrls: ['./kontakta.component.css']
})
export class KontaktaComponent implements OnInit {
model:any = {}

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert(JSON.stringify(this.model))
  }

}
