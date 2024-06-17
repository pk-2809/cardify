import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatBottomSheet, MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { AddCardComponent } from '../add-card/add-card.component';
import { LovService } from 'src/app/core/services/lov.service';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    CardsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isNoCard: boolean = true;
  cardList: any[] = [];

  constructor(
    private _bottomSheet: MatBottomSheet,
    private _lov: LovService
  ) {
    this.isNoCard = this._lov.yourCard.length ? false : true;
    // this.openAddCardForm();
  }

  openAddCardForm() {
    this._bottomSheet.open(AddCardComponent, {
      disableClose: true,
      panelClass: 'custom-bottom'
    });
  }

}
