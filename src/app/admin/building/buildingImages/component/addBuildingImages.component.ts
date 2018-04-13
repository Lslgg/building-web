import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { ImagesTypeList } from '../../../../home/component/bean/buildingImagesType';

@Component({
    selector: 'building-add-building-menu',
    templateUrl: 'addBuildingImages.html',
})

export class AddBuildingImagesComponent implements OnInit {

    buildingImagesForm: FormGroup = this.fb.group({
        id: [''],
        title: ['', Validators.required],
        brief: ['', Validators.required],
        type: ['', Validators.required],
        imageIds: ['', Validators.required],
        desc: ['', Validators.required],
        startDate: [this.cdate.startDate],
        endDate: [this.cdate.endDate],
    });

    buildingImages: FormStr = {
        data: gql`query($id:String){
            info:getBuildingImagesById(id:$id){
                id,title,imageIds:Images{ id name:originalname url:path },brief,desc     
            }
        }`,
        save: gql`mutation($info:inputBuildingImages){
            saveBuildingImages(buildingImages:$info){ id }
        }`,
        url: "admin/buildingImages",
    }

    files: Array<any> = new Array<any>();

    typeList: Array<{ key: string, value: string }>;

    constructor(@Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router, private apollo: Apollo) {
        this.typeList = ImagesTypeList.typeList;
    }

    ngOnInit() { }
}