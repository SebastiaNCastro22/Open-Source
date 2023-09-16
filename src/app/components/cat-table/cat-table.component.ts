import { Component, ViewChild } from '@angular/core';
import { CatServicesService } from "../../services/cat-services.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cat-table',
  templateUrl: './cat-table.component.html',
  styleUrls: ['./cat-table.component.css']
})
export class CatTableComponent {
  displayedColumns:string [] = ['name','origin','description','weight']

  data:any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator,{static:true}) paginator!: MatPaginator;

  cats=[];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private catService: CatServicesService, private router:Router) {

  }
  ngOnInit():void{
    this.getAllCats();
  }

  getAllCats(){
    this.catService.getAllCats().subscribe((response : any) => {
      this.dataSource.data = response
      this.dataSource.data.forEach((cat: any) => {
        cat.weight = `Imperial :${cat.weight.imperial} k\nMetric: ${cat.weight.metric} k`
      })
    })
  }
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  getRow(row: any){

  }



}
