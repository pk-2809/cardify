import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatBottomSheet, MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { AddCardComponent } from '../add-card/add-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LayoutModule, MatButtonModule, MatIconModule, MatBottomSheetModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isNoCard: boolean = true;

  constructor(private _bottomSheet: MatBottomSheet) {
    this.openAddCardForm();
  }

  openAddCardForm() {
    this._bottomSheet.open(AddCardComponent, {
      // disableClose: true,
      panelClass: 'custom-bottom'
    });
  }

}
