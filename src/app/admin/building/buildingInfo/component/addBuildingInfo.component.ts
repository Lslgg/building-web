import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'building-add-building-menu',
    templateUrl: 'addBuildingInfo.html',
})

export class AddBuildingInfoComponent implements OnInit {

    buildingInfoForm: FormGroup = this.fb.group({
        id: [''],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        qqLink: ['', Validators.required],
        tcWeibo: ['', Validators.required],
        xlWeibo: ['', Validators.required],
        tbLink: ['', Validators.required],
        address: ['', Validators.required],
        brief: ['', Validators.required],
        code: ['', Validators.required],
        copyright: ['', Validators.required],
        contact1: ['', Validators.required],
        contact2: ['', Validators.required],
        board: ['', Validators.required],
        startDate: [this.cdate.startDate],
        endDate: [this.cdate.endDate],
    });

    buildingInfo: FormStr = {
        data: gql`query($id:String){
            info:getBuildingInfoById(id:$id){
                id,phone,email,qqLink,tcWeibo,xlWeibo,tbLink,address,brief,code,copyright,contact1,contact2,board
            }
        }`,
        save: gql`mutation($info:inputBuildingInfo){
            saveBuildingInfo(buildingInfo:$info){ id }
        }`,
        url: "admin/buildingInfo",
    }

    files: Array<any> = new Array<any>();


    constructor(@Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router, private apollo: Apollo) {
    }

    ngOnInit() { }
}