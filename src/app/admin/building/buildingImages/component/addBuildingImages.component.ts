import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

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

    typeList: Array<{ key: string, value: string }> = [
        { key: "logo", value: "网站图标" },
        { key: "qrcode", value: "二维码" },
        { key: "slide", value: "幻灯片" },
        { key: "index-service1", value: "首页-服务优势1" },
        { key: "index-service2", value: "首页-服务优势2" },
        { key: "index-service3", value: "首页-服务优势3" },
        { key: "index-contact1", value: "首页-联系图片1" },
        { key: "index-contact2", value: "首页-联系图片2" },
        { key: "index-brand", value: "首页-合作商标" },
        { key: "contact-contact1", value: "联系我们-图片1" },
        { key: "about", value: "栏目图片-关于我们" },
        { key: "example", value: "栏目图片-定制案例" },
        { key: "news", value: "栏目图片-新闻资讯" },
        { key: "service", value: "栏目图片-服务优势" },
        { key: "elite", value: "栏目图片-精英团队" },
        { key: "contact", value: "栏目图片-联系我们" },
        { key: "gallery-company", value: "相册-公司相册" },
        { key: "gallery-example", value: "相册-定制案例" },
        { key: "gallery-elite", value: "相册-精英团队" },
    ];

    constructor(@Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router, private apollo: Apollo) {
    }

    ngOnInit() { }
}