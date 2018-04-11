import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'building-add-building-menu',
    templateUrl: 'addBuildingArticle.html',
})

export class AddBuildingArticleComponent implements OnInit {

    buildingArticleForm: FormGroup = this.fb.group({
        id: [''],
        type: ['', Validators.required],
        title: ['', Validators.required],
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
                id,title,author,imageIds:Images{ id name:originalname url:path },content,desc
            }
        }`,
        save: gql`mutation($info:inputBuildingArticle){
            saveBuildingArticle(buildingArticle:$info){ id }
        }`,
        url: "admin/buildingArticle",
    }

    files: Array<any> = new Array<any>();

    typeList: Array<{ key: string, value: string }> = [
        { key: "companyBrief", value: "关于我们-公司简介" },
        { key: "brandBrief", value: "关于我们-品牌简介" },
        { key: "service", value: "服务优势-专业的服务团队" },
        { key: "serviceWork", value: "服务优势-专业的施工团队" },
        { key: "contact", value: "联系我们" },
    ];

    constructor(@Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router, private apollo: Apollo) {
    }

    ngOnInit() { }
}