import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CopyIconComponent } from 'src/app/shared/components/copy-icon/copy-icon.component';

@Component({
  selector: 'app-view-card',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, CopyIconComponent],
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent {

}
