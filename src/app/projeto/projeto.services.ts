import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getLocaleDayPeriods } from '@angular/common';

@Injectable()
export class projetoServices{
    apiRoot: string = "http://antenacpsbackend-env.xryvsu2wzz.sa-east-1.elasticbeanstalk.com";
    headers;
    token;

    constructor(private http: HttpClient){
        this.token = JSON.parse(localStorage.getItem('token'));
    }

    getUnidades(){
        return this.http.get(`${this.apiRoot}/cp/unidades`, {headers: new HttpHeaders({
            'token': this.token.token
        })})
    }

    getCursos(){
        return this.http.get(`${this.apiRoot}/cp/cursos`, {headers: new HttpHeaders({
            'token': this.token.token
        })})
    }


}




export interface Projeto{
    titulo: string;
    descricao: string;
    orientador: string;
    status: string;
    tipo: string;
    tema: string;
    coops: Coops[];
    textoProjeto: string;
    linkTexto: string;
    arquivos: Arquivo[];
    capa : string;
}

export interface Arquivo{
    tipo: string;
    titulo: string;
    legenda: string;
    caminho: string;
}

export interface Curso{
    id: number;
    nome: string;
}

export interface Unidade{
    id: number;
    nome: string;
    endereco: string;
    bairro: string;
    cidade: string;
    id_regioes: string;
}

export interface Categoria{
    nome: string;
    valor: string;
    checado?: boolean;    
}

export interface Coops {
    email: string;
    unidade: string;
    curso: string;
}

export interface Categ {
    desc: string;
}

export interface Colab {
    desc: string;
}

export interface Premios {
    desc: string;
}

export interface Recursos {
    desc: string;
}

export interface Direitos {
    desc: string;
}

export interface Creditos {
    desc: string;
}

export interface Detalhes {
    categoria1: string,
    		categoria2: string,
    		premio1: string,
    		premio2: string,
    		recurso1: string,
    		recurso2: string,
    		credito1: string,
    	credito2: string,
    	direitos: string
}
