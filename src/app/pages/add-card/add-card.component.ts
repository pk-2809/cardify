import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { LovService } from 'src/app/core/services/lov.service';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS, DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export class MonthYearDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${month}/${year}`;
  }

  override parse(value: any): Date | null {
    const parts = value.split('/');
    const month = +parts[0] - 1;
    const year = +parts[1];
    if (parts.length === 2 && month >= 0 && month < 12 && year > 0) {
      return new Date(year, month, 1);
    }
    return null;
  }
}
@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MonthYearDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {

  bankNameControl = new FormControl("");
  bankCardsControl = new FormControl("");
  dateControl = new FormControl(new Date());
  isStepEditable: boolean = false;
  bankNames: any = [];
  filteredBankNames?: Observable<any[]>;
  bankCards: any = [];
  filteredBankCards?: Observable<any[]>;
  private currentStep = 0;

  constructor(
    private _formBuilder: FormBuilder,
    private _lov: LovService,
    private _bottomSheetRef: MatBottomSheetRef
  ) {
    this.bankNames = this._lov.bankNames;
    this.bankCards = this._lov.bankCardNames;
  }

  ngOnInit() {
    this.filteredBankNames = this.bankNameControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    )
    this.filteredBankCards = this.bankCardsControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCards(value || '')),
    )
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.bankNames.filter((option: any) => option.name.toLowerCase().includes(filterValue));
  }

  private _filterCards(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.bankCards.filter((option: any) => option.name.toLowerCase().includes(filterValue));
  }

  chosenYearHandler(normalizedYear: Date, datepicker: any) {
    const ctrlValue = this.dateControl.value!;
    ctrlValue.setFullYear(normalizedYear.getFullYear());
    this.dateControl.setValue(new Date(ctrlValue));
  }

  chosenMonthHandler(normalizedMonth: Date, datepicker: any) {
    const ctrlValue = this.dateControl.value!;
    ctrlValue.setMonth(normalizedMonth.getMonth());
    this.dateControl.setValue(new Date(ctrlValue));
    datepicker.close();
  }

  next(stepper: MatStepper) {
    this.currentStep = stepper.selectedIndex;
    (stepper as any).next();
  }
  previous(stepper: MatStepper) {
    this.currentStep = stepper.selectedIndex;
    (stepper as any).previous();
  }

  onSaveCard() {
    this.closeBottom();
  }

  closeBottom() {
    this._bottomSheetRef.dismiss();
  }

}
