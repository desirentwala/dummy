import { Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

export interface Rstatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  hide = true;
  rStatus: Rstatus[] = [
    {value: 'rs-0', viewValue: 'Single'},
    {value: 'rs-1', viewValue: 'Married'},
    {value: 'rs-2', viewValue: 'Divorced'}
  ];
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

}

