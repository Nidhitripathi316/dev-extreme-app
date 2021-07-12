import { Component, ViewChild, enableProdMode, AfterViewInit } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { Employee, PocFormService } from '../poc-form.service';

import notify from 'devextreme/ui/notify';
if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}
const sendRequest = function(value) {
  const validEmail = "test@dx-email.com";
  return new Promise((resolve) => {
      setTimeout(function() {
          resolve(value === validEmail);
      }, 1000);
  });    
}
@Component({
  selector: 'app-poc-static-form',
  providers: [ PocFormService ],
  templateUrl: './poc-static-form.component.html',
  styleUrls: ['./poc-static-form.component.css']
})

export class PocStaticFormComponent implements AfterViewInit {
    @ViewChild(DxFormComponent, { static: false }) myform: DxFormComponent;
    employee: Employee;
    positions: string[];
    rules: Object;
    value: Date = new Date(1981, 3, 27);
    now: Date = new Date();
    min: Date = new Date(1900, 0, 1);
    asyncValidation(params) {
      return sendRequest(params.value);
  }
  priorities: string[];
    priority: string;
    constructor(service: PocFormService) {
        this.employee = service.getEmployee();
        this.positions = service.getPositions();
        this.rules = { 'X': /[02-9]/ };
        this.priorities = [
          "Male", 
          "Female"
      ];
      this.priority = this.priorities[2];
    }

    ngAfterViewInit() {
        this.myform.instance.validate()
    }
    get diffInDay() {
      return Math.floor(Math.abs(((new Date()).getTime() - this.value.getTime())/(24*60*60*1000))) + " days";
  }
    onFormSubmit = function(e) {
      notify({
          message: "You have submitted the form",
          position: {
              my: "center top",
              at: "center top"
          }
      }, "success", 3000);
      
      e.preventDefault();
  }
}



  