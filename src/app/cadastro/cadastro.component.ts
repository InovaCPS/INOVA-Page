import { Component } from '@angular/core';
import { map } from "rxjs/operators"
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  
  logo = require('../../app/images/antena_cps.jpg')
  graf = require('../../app/images/background.png')
  
  apiRoot: string = "http://localhost:8080";
  name: String;
  Sname: String;
  email: String;
  senha: String;

  constructor(private http: HttpClient) {}

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/cp/parceiro`;
    this.http
      .post(url, { nome: this.name, sobrenome: this.Sname, email: this.email, senha: this.senha })
      .subscribe(res => console.log("Cadastrado com Sucesso!!!"))         
  }
}