import { TransferService } from './../transfer.service';
import { Transfer } from './../transfer.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers-create.component.html',
  styleUrls: ['./transfers-create.component.css']
})
export class TransfersComponent implements OnInit {

  //Produto com elementos vazios para que possamos incluir os dados via form
  transfer: Transfer = {
    nomeCliente: "",
    valor: "",
    contaCliente: ""
  }

  constructor(private transferService: TransferService, private router: Router) { }

  ngOnInit(): void {
  }

  createTransfer(): void {
    this.transferService.create(this.transfer).subscribe({
      next: (resultado) => console.log("Adicionando: " + resultado),
      error: (erro) => console.error(erro),
      complete: () => {
        console.info("Transferência realizada com sucesso!"),
        this.transferService.mensagem("Transferência realizada.")
      }
    })
    this.router.navigate(["/home"])
  }

  cancel(): void {
    this.router.navigate(["/home"])
  }
}
