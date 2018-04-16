import { Component, OnInit, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import { BuildingArticle } from '../component/bean/buildingArticle';
import { BuildingImages } from '../component/bean/buildingImages';

@Component({
    selector: 'home-contact',
    templateUrl: 'contact.html',
    styleUrls: ['contact.scss', '../media.scss'],
})

export class ContactComponent implements OnInit {

    column: String = '';

    article: String = '';

    img: Array<BuildingImages>;

    dataServer: String = '';

    constructor(private apollo: Apollo, private route: ActivatedRoute, @Inject("commonData") private cdata: CommonData) {
        this.column = this.route.snapshot.params['column'];
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() {
        this.getData();
    }

    // 查询 栏目图片 文章 联系图片1 
    getData() {
        this.apollo.query<{ article: Array<BuildingArticle>, img: Array<BuildingImages> }>({
            query: gql`query($type:Json) {
                article: getBuildingArticleWhere(buildingArticle:{type:$type}) {
                    id,type,title,tag,author,content,desc,imageIds:Images{id,path},createAt
                }
                img:getBuildingImagesWhere(buildingImages:{type:"contact-contact1"}) {
                  id,title,brief,type,imageIds:Images{id,path}
                }
            }`,
            variables: { type: `{ "$eq": "${this.column}" }` }
        }).subscribe(({ data }) => {
            if (data && data.article && data.article[0]) {
                this.article = data.article[0].content;
            }
            if (data && data.img) {
                this.img = data.img;
            }
        });
    }

    sent(title: string, name: string, email: string, phone: string, content: string) {
        const sql = gql`mutation($title:String,$name:String,$email:String,$phone:String,$content:String) {
            info:saveBuildingContact(buildingContact:{title:$title,name:$name,email:$email,phone:$phone,content:$content,isValid:true}) {
              id,name
            }
          }`;
        this.apollo.mutate<{ info: any }>({
            mutation: sql,
            variables: {
                title: title == "" ? '空' : title, name: name == "" ? '空' : title,
                email: email == "" ? '空' : title, phone: phone == "" ? '空' : title,
                content: content == "" ? '空' : title
            }
        }).subscribe(data => {
            if (data && data.data && data.data.info && data.data.info.id) {
                alert('发送成功！\n你好：' + data.data.info.name + '，信息已收到，我们会尽快联系你。');
            }
        })
    }
}