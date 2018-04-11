import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'building-add-building-menu',
    templateUrl: 'addBuildingMenu.html',
})

export class AddBuildingMenuComponent implements OnInit {

    buildingMenuForm: FormGroup = this.fb.group({
        id: [''],
        title: ['', Validators.required],
        startDate: [this.cdate.startDate],
        endDate: [this.cdate.endDate],
    });

    buildingMenu: FormStr = {
        data: gql`query($id:String){
            info:getBuildingMenuById(id:$id){
                id,title                
            }
        }`,
        save: gql`mutation($info:inputBuildingMenu){
            saveBuildingMenu(buildingMenu:$info){ id }
        }`,
        url: "admin/buildingMenu",
    }

    files: Array<any> = new Array<any>();

    constructor(@Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router, private apollo: Apollo) {
    }

    ngOnInit() { }
}