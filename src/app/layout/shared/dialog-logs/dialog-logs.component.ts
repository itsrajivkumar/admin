import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IndexService } from '../../../shared/services/index';

@Component({
  selector: 'app-dialog-logs',
  templateUrl: './dialog-logs.component.html',
  styleUrls: ['./dialog-logs.component.scss']
})
export class DialogLogsComponent implements OnInit {
  record: any;
  constructor(
    public indexService: IndexService,
    public dialogRef: MatDialogRef<DialogLogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit() {
    if (this.data.type == 1) { // call file registry
      this.indexService.getFileRegistryById(this.data.id).subscribe((response: any) => {
        this.record = response.data;

      }, err => { console.log(err) });
    }
    else if (this.data.type == 2) { // call transport logs
      this.indexService.getTransportLogById(this.data.id).subscribe((response: any) => {
        this.record = response.data;

      }, err => { console.log(err) });

    }
    else if (this.data.type == 3) { // call boomi logs
      this.indexService.getBoomiLogById(this.data.id).subscribe((response: any) => {
        this.record = response.data;

      }, err => { console.log(err) });

    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
