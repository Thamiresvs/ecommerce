import {DataSource} from '@angular/cdk/collections';
import { Component } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

export interface PeriodicElement {
  name: string;
  describe: string;
  points: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Questionarios', describe: 'The point of using Lorem Ipsum', points: 45},
  {name: 'Questionarios1', describe: 'The point of using Lorem Ipsum', points: 26},
  {name: 'Questionarios2', describe: 'The point of using Lorem Ipsum', points: 44},
  {name: 'Questionarios3', describe: 'The point of using Lorem Ipsum', points: 35},
  {name: 'Questionarios4', describe: 'The point of using Lorem Ipsum', points: 75},
  {name: 'Questionarios5', describe: 'The point of using Lorem Ipsum', points: 63}
];

/**
 * @title Adding and removing data when using an observable-based datasource.
 */
@Component({
  selector: 'avaliacoes.component',
  styleUrls: ['avaliacoes.component.css'],
  templateUrl: 'avaliacoes.component.html',
})
export class AvaliacoesComponent {
  displayedColumns: string[] = ['name', 'describe', 'points'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}
