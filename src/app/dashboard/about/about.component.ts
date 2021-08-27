import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from 'src/app/api-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  customer: any;
  dataSource: any;
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id','name', 'year', 'color', 'pantone_value', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.api.fake().subscribe((res) => {
      this.customer = res;
      this.dataSource = new MatTableDataSource(this.customer.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteUser(id){
    debugger
   this.dataSource.data = this.dataSource.data.filter((e, i) => e.id !== id);
  }

}