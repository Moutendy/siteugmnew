import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() total!: number;
  @Input() currentPage!: number;
  @Input() perPage!: number;
  @Output() pageChanged = new EventEmitter<number>();

  pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['total']) {
      this.calculatePages();
    }
  }

  calculatePages(): void {
    const totalPages = Math.ceil(this.total / this.perPage);
    this.pages = [];
    for (let i = 1; i <= totalPages; i++) {
      this.pages.push(i);
    }
  }

  loadPage(page: number): void {
    if (page >= 1 && page <= Math.ceil(this.total / this.perPage)) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }

  get lastPage(): number {
    return Math.ceil(this.total / this.perPage);
  }
}
