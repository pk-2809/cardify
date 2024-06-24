import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'copy-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './copy-icon.component.html',
  styleUrls: ['./copy-icon.component.scss']
})
export class CopyIconComponent {

  isCopied: boolean = false;


  copyToClipboard() {
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 1000)
  }

}
