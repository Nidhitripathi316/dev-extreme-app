import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule,DxTemplateModule, DxSelectBoxModule, DxCheckBoxModule,DxListModule  } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocArrayComponent } from './poc-array/poc-array.component';
import { PocArrayService } from './poc-array.service';
import { PocCustomComponent } from './poc-custom/poc-custom.component';
import {  HttpClientModule } from '@angular/common/http';
import { PocDynamicRenderComponent } from './poc-dynamic-render/poc-dynamic-render.component';
import { PocStaticFormComponent } from './poc-static-form/poc-static-form.component';
import {DxTextAreaModule,DxFormModule, DxButtonModule,
  DxValidatorModule,DxRadioGroupModule,DxDateBoxModule,DxTabsModule,DxHtmlEditorModule,DxFileUploaderModule } from 'devextreme-angular';
import { PocSimpleDynamicRenderFormComponent } from './poc-simple-dynamic-render-form/poc-simple-dynamic-render-form.component';
import { GroupDynamicRenderFormComponent } from './poc-group-dynamic-render-form/group-dynamic-render-form.component';
import { PocAutocompleteComponent } from './poc-autocomplete/poc-autocomplete.component';
import { DxAutocompleteModule } from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent,
    PocArrayComponent,
    PocCustomComponent,
    PocDynamicRenderComponent,
    PocStaticFormComponent,
    PocSimpleDynamicRenderFormComponent,
    GroupDynamicRenderFormComponent,
    PocAutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxAutocompleteModule,
    DxButtonModule,
    DxDateBoxModule,
    DxRadioGroupModule,
    DxValidatorModule,
    DxTemplateModule, 
    DxSelectBoxModule,
    DxTextAreaModule,
    DxTabsModule,
    DxHtmlEditorModule,
    DxFormModule,
     DxCheckBoxModule,
     DxFileUploaderModule,
     DxListModule,
     HttpClientModule
  ],
  providers: [PocArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
