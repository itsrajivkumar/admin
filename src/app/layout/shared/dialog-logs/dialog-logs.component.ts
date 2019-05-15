import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-logs',
  templateUrl: './dialog-logs.component.html',
  styleUrls: ['./dialog-logs.component.scss']
})
export class DialogLogsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogLogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit() { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
