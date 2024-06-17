import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LovService } from 'src/app/core/services/lov.service';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddCardComponent } from '../add-card/add-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, MatDividerModule, MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  lengthCheck: any[] = [];

  constructor(
    private _lov: LovService,
    private _bottomSheet: MatBottomSheet,
    private _router: Router
  ) {
    this.lengthCheck = this._lov.bankCardNames;
  }

  addNewCard() {
    this._bottomSheet.open(AddCardComponent, {
      disableClose: true,
      panelClass: 'custom-bottom'
    });
  }

  onViewCard(x: any) {
    this._router.navigate(['/view-card']);
  }

}
