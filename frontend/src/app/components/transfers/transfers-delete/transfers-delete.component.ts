import { DeleteConfirmationComponent } from './../delete-confirmation/delete-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { Transfer } from './../transfer.model';
import { TransferService } from './../transfer.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transfers-delete',
  templateUrl: './transfers-delete.component.html',
  styleUrls: ['./transfers-delete.component.css']
})
export class TransfersDeleteComponent implements OnInit {

  title = 'angular-confirmation-dialog';

  transfer!: Transfer

  constructor(private transferService: TransferService, private router: Router, private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.transferService.readById(id).subscribe((resultado) => {this.transfer = <any>resultado})
  }

  deleteTransfer(): void {
    this.transferService.delete(this.transfer.id_transferencia).subscribe({
      next: (resultado) => {
        console.log("Transferência excluída com sucesso!"),
        this.transferService.mensagem("Transferência excluída com sucesso!")
      },
      error: (erro) => console.error(erro)
      // complete: () => console.info("Tarefa editada.")
    })
    this.router.navigate(["/home"])
  }

  cancel(): void {
    this.router.navigate(["/home"])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '350px',
      data: "Confirma a exclusão da transferência?"      
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // console.log('Yes clicked');
        this.deleteTransfer()
      }
    });
  }

}
