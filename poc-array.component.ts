import { Component, OnInit } from '@angular/core';
import { Customer, PocArrayService } from '../poc-array.service';
import { exportDataGrid } from 'devextreme/excel_exporter';
import * as ExcelJS from 'exceljs';
import saveAs from 'file-saver';

@Component({
  selector: 'app-poc-array',
  templateUrl: './poc-array.component.html',
  styleUrls: ['./poc-array.component.css'],
  providers: [PocArrayService]
})
export class PocArrayComponent implements OnInit {
  customers: Customer[];
  allowSearch: boolean;
  currentFilter: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;
    columnChooserModes: any;
  onExporting(e) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Employees');
    
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
    e.cancel = true;
  }

  constructor(service:PocArrayService) { 
    this.customers =  service.getCustomers();
    this.allowSearch = true;
    this.showFilterRow = true;
        this.showHeaderFilter = true;
        this.columnChooserModes = [{
            key: "dragAndDrop",
            name: "Drag and drop"
        }, {
            key: "select",
            name: "Select"
        }];
  }

  ngOnInit(): void {
  }
  searchText: string = "";
  setSearchValue (searchText) {
      this.searchText = searchText;
  }
}
