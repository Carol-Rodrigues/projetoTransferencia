import { TransferService } from './../../components/transfers/transfer.service';
import { Transfer } from './../../components/transfers/transfer.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transfers!: Transfer[]
  displayedColumns = ["id_transferencia", "nome", "valor", "contaCliente", "action"]

  constructor(private transferService: TransferService, private router: Router) {
    this.transfers = []
  }

  ngOnInit(): void {
    this.mostrarTransf()
  }

  mostrarTransf() {
    this.transferService.read().subscribe({
      next: (resultado) => {
        console.log(resultado) //se der certo, imprime no console as tarefas do BD
        this.transfers = <any>resultado //a variável criada vai receber dentro dela o resultado, que são as tarefas do BD. O <any> significa que os tipos que irão vir são de qualquer tipo.
      },
      error: (erro) => console.error(erro),
      // complete: () => console.info("complete") //o complete dá como resposta que foi completada -- não obrigatório
    })
  }

}
