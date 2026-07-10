import { Component, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-modal-product-view',
  imports: [CommonModule],
  templateUrl: './modal-product-view.html',
  styleUrl: './modal-product-view.css',
})
export class ModalProductView {
  @Input() product: Product | null = null;
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
