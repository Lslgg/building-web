import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { ArticleTypeList } from '../../../../home/component/bean/buildingArticleType';

@Component({
    selector: 'building-add-building-menu',
    templateUrl: 'addBuildingArticle.html',
})

export class AddBuildingArticleComponent implements OnInit {

    buildingArticleForm: FormGroup = this.fb.group({
        id: [''],
        type: ['', Validators.required],
        title: ['', Validators.required],
        tag: [''],
        brief: [''],
        author: [''],
        imageIds: [''],
        content: ['', Validators.required],
        desc: ['',],
        startDate: [this.cdate.startDate],
        endDate: [this.cdate.endDate],
    });

    buildingArticle: FormStr = {
        data: gql`query($id:String){
            info:getBuildingArticleById(id:$id){
                id,type,title,tag,brief,author,imageIds:Images{ id name:originalname url:path },content,desc
            }
        }`,
        save: gql`mutation($info:inputBuildingArticle){
            saveBuildingArticle(buildingArticle:$info){ id }
        }`,
        url: "admin/buildingArticle",
    }

    files: Array<any> = new Array<any>();


    typeList: Array<{ key: string, value: string }>;

    constructor(@Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router, private apollo: Apollo) {
        this.typeList = ArticleTypeList.typeList;
    }

    ngOnInit() { }
}