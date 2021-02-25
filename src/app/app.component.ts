import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: number[] = [];

  onAddColumn(): void {
    if (this.columns.length === 4) {
      return;
    }
    this.columns.push(this.columns.length);
  }

  getColumnClassName(): string {
    return `col-sm-${Math.floor(12 / this.columns.length)}`;
  }
}
