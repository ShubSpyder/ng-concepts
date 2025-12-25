import { Component, inject } from '@angular/core';
import { FetchDataService } from './services/fetch-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unit-testing',
  imports: [FormsModule],
  templateUrl: './unit-testing.component.html',
  styleUrl: './unit-testing.component.scss'
})
export class UnitTestingComponent {

  data: any;

  filteredData: any;

  fetchDataService = inject(FetchDataService);

  searchTerm: string = '';

  constructor() { }

  fetchData() {
    this.fetchDataService.fetchData().subscribe((data) => {
      this.data = data;
      this.filteredData = data;
    });
  }

  filterData() {
    this.filteredData = this.data.filter((item: any) => {
      return item.title.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
