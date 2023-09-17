import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { newSignUp } from 'src/app/models/newSignUp';

@Component({
  selector: 'app-list-sign-up',
  templateUrl: './list-sign-up.component.html',
  styleUrls: ['./list-sign-up.component.scss']
})

export class ListSignUpComponent {
  listSignUp: newSignUp[] | undefined;

  constructor(private http: HttpClient) { }

  showListSignUp(): void {
    this.http.get<newSignUp[]>('http://localhost:5000/api/NewSignUp/get-all').subscribe(
      {next: response => this.listSignUp = response}
    );
  }
}