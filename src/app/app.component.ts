import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

//let count: number = 9;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  columns: number[] = [1];

  onAddColumn(): void {
    if (this.columns.length === 4) {
      return;
    }
    this.columns.push(this.columns.length);
  }

  ngOnInit() {
    fromEvent(document, 'click').pipe(scan(count => count + 1, 0)).subscribe(count => console.log(`Clicked ${count} times`));
  }

  getColumnClassName(): string {
    return `col-sm-${Math.floor(12 / this.columns.length)}`;
  }
}
