import { Transfer } from './../transfer.model';
import { TransferService } from './../transfer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transfers-edit',
  templateUrl: './transfers-edit.component.html',
  styleUrls: ['./transfers-edit.component.css']
})
export class TransfersEditComponent implements OnInit {

  transfer!: Transfer

  constructor(private router: Router, private transferService: TransferService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.transferService.readById(id).subscribe((resultado) => {this.transfer = <any>resultado})
  }

  updateTransfer(): void {
    this.transferService.update(this.transfer.id_transferencia, this.transfer).subscribe({
        next: (resultado) => {
          console.log("Transferência editada com sucesso!")
          this.transferService.mensagem("Transferência atualizada com sucesso!")
        },
        error: (erro) => console.error(erro)
        // complete: () => console.info("Tarefa editada.")
    })
    this.router.navigate(["/home"])
  }


  cancel(): void {
    this.router.navigate(["/home"])
  }

}
