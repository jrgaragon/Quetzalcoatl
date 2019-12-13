import {
    Component, OnInit, Output, EventEmitter
}
from '@angular/core';

@Component({ selector: 'app-list-panel', templateUrl: './list-panel.component.html', styleUrls: ['./list-panel.component.css'] }) export class ListPanelComponent implements OnInit {

    lookupTableName: Array<any>;
    @Output() artifactSelected: EventEmitter<number>;

    constructor() {
        this.artifactSelected = new EventEmitter();
        this.lookupTableName = new Array();

        this.lookupTableName.push({ id:1, name: "common" });

        this.lookupTableName.push({ id:2, name: "predefined" });

        this.lookupTableName.push({ id:3, name: "application" });

        console.log(this.lookupTableName);
    }

    ngOnInit() {}

    loadLookupData(lookupId: number) {
        console.log("lookupId: " + lookupId);
        this.artifactSelected.emit(lookupId);
    }

}
