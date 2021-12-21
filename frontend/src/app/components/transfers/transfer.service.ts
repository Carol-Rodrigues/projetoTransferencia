import { Transfer } from './transfer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from "@angular/material/snack-bar"

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  //informando o angular que todas as rotinas realizadas no backend serão acessadas (post, put, get, delete) através dessa rota
  url = "/transferencias"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  // Método referente ao MatSnackBar do Material, para mostrar mensagem quando as funções de CRUD funcionarem
  mensagem(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //Método do CRUD - create -- será chamado no componente transfers-create
  create(transfer: Transfer) {
    return this.http.post(this.url, transfer)
  }

  //Método do CRUD - read (para a lista toda) -- será chamado no home
  read() {
    return this.http.get(this.url)
  }

  //Método do CRUD - read (para um id específico) -- será utilizada na rota de edição, para identificar o id que será modificado
  readById(id: any) {
    return this.http.get(this.url + "/" + id)
  }

  //Método do CRUD - update (para um id específico)
  update(id: any, transfer: Transfer) {
    return this.http.put(this.url + "/" + id, transfer)
  }

  //Método do CRUD - delete (para um id específico)
  delete(id: any) {
    return this.http.delete(this.url + "/" + id)
  }
}
