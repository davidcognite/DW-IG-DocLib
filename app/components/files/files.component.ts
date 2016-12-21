
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
    DocumentActionsService,
    DocumentList
} from 'ng2-alfresco-documentlist';
import {AlfrescoAuthenticationService} from 'ng2-alfresco-core';


declare let __moduleName: string;

@Component({
    moduleId: __moduleName,
    selector: 'files-component',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.css']
})
export class FilesComponent {
    currentPath: string = '/Sites/swsdp/documentLibrary';

    fileNodeId: any;
    fileShowed: boolean = false;
    multipleFileUpload: boolean = false;
    folderUpload: boolean = false;
    acceptedFilesTypeShow: boolean = false;
    versioning: boolean = false;
    jsAPI: any;

    acceptedFilesType: string = '.jpg,.pdf,.js';

    @ViewChild(DocumentList)
    documentList: DocumentList;

    constructor(private documentActions: DocumentActionsService,
                private router: Router,
                private authService: AlfrescoAuthenticationService) {
        documentActions.setHandler('my-handler', this.myDocumentActionHandler.bind(this));

        this.jsAPI = authService.getAlfrescoApi();
    }

    myDocumentActionHandler(obj: any) {
        window.alert('my custom action handler');
    }

    myCustomAction1(event) {
        alert('Custom document action for ' + event.value.entry.name);
    }

    declareInPlaceRecord(event) {
        // Returns promise: this. jsAPI.webScript.executeWebScript('GET', this.scriptPath, this.scriptArgs, this.contextRoot, this.servicePath)
        alert('Declare record for ' + event.value.entry.name);
    }

    myFolderAction1(event) {
        alert('Custom folder action for ' + event.value.entry.name);
    }

    showFile(event) {
        if (event.value.entry.isFile) {
            this.fileNodeId = event.value.entry.id;
            this.fileShowed = true;
        } else {
            this.fileShowed = false;
        }
    }

    onFolderChanged(event?: any) {
        if (event) {
            this.currentPath = event.path;
        }
    }

    toggleMultipleFileUpload() {
        this.multipleFileUpload = !this.multipleFileUpload;
        return this.multipleFileUpload;
    }

    toggleFolder() {
        this.multipleFileUpload = false;
        this.folderUpload = !this.folderUpload;
        return this.folderUpload;
    }

    toggleAcceptedFilesType() {
        this.acceptedFilesTypeShow = !this.acceptedFilesTypeShow;
        return this.acceptedFilesTypeShow;
    }

    toggleVersioning() {
        this.versioning = !this.versioning;
        return this.versioning;
    }

    viewActivitiForm(event?: any) {
        this.router.navigate(['/activiti/tasksnode', event.value.entry.id]);
    }
}
