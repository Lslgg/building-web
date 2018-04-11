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
                id,title,imageIds:Images{ id name:originalname url:path }          
            }
        }`,
        save: gql`mutation($info:inputBuildingImages){
            saveBuildingImages(buildingImages:$info){ id }
        }`,
        url: "admin/buildingImages",
    }

    files: Array<any> = new Array<any>();

    typeList: Array<{ key: string, value: string }> = [
        { key: "网站图标", value: "网站图标" },
        { key: "二维码", value: "二维码" },
        { key: "幻灯片", value: "幻灯片" },
        { key: "首页-服务优势1", value: "首页-服务优势1" },
        { key: "首页-服务优势2", value: "首页-服务优势2" },
        { key: "首页-服务优势3", value: "首页-服务优势3" },
        { key: "首页-联系图片1", value: "首页-联系图片1" },
        { key: "首页-联系图片2", value: "首页-联系图片2" },
        { key: "首页-合作商标", value: "首页-合作商标" },
        { key: "about", value: "关于我们-栏目图片" },
        { key: "example", value: "定制案例-栏目图片" },
        { key: "news", value: "新闻资讯-栏目图片" },
        { key: "service", value: "服务优势-栏目图片" },
        { key: "elite", value: "精英团队-栏目图片" },
        { key: "contact", value: "联系我们-栏目图片" },
        { key: "联系我们-图片1", value: "联系我们-图片1" },
        { key: "相册-公司相册", value: "相册-公司相册" },
        { key: "相册-定制案例", value: "相册-定制案例" },
        { key: "相册-精英团队", value: "相册-精英团队" },
    ];

    constructor(@Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router, private apollo: Apollo) {
    }

    ngOnInit() { }
}