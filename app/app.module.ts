
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from 'ng2-alfresco-core';

import { SearchModule } from 'ng2-alfresco-search';


import { DataTableModule } from 'ng2-alfresco-datatable';
import { DocumentListModule } from 'ng2-alfresco-documentlist';
import { UploadModule } from 'ng2-alfresco-upload';


import { LoginModule } from 'ng2-alfresco-login';
import { UserInfoComponentModule } from 'ng2-alfresco-userinfo';

import { ViewerModule } from 'ng2-alfresco-viewer';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import {

    SearchComponent,
    SearchBarComponent,



    FilesComponent,
    RMComponent,

    LoginDemoComponent,
      SettingComponent
} from './components/index';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CoreModule.forRoot(),

        SearchModule.forRoot(),


        DataTableModule,
        DocumentListModule.forRoot(),
        UploadModule.forRoot(),
        ViewerModule.forRoot(),


        LoginModule,
        UserInfoComponentModule.forRoot()
    ],
    declarations: [
        AppComponent,
        SearchBarComponent,
        SearchComponent,
        FilesComponent,
        RMComponent,
        LoginDemoComponent,
          SettingComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
