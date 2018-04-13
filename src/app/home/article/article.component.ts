import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import { BuildingArticle } from '../component/bean/buildingArticle';
import { BuildingImages } from '../component/bean/buildingImages';

@Component({
    selector: 'home-article',
    templateUrl: 'article.html',
    styleUrls: ['article.scss', '../media.scss']
})

export class ArticleComponent implements OnInit {

    type: String = '';

    column: String = '';

    content: String = '';

    img: String = '';

    constructor(private apollo: Apollo, private route: ActivatedRoute) {
        this.type = this.route.snapshot.params['type'];
        this.column = this.route.snapshot.params['column'];
    }

    ngOnInit() {
        this.getData();
    }

    // 查询 栏目图片 文章内容 
    getData() {
        this.apollo.query<{ article: BuildingArticle, img: BuildingImages }>({
            query: gql`query($type:Json,$type2:Json) {
                article: getBuildingArticleWhere(buildingArticle:{type:$type}) {
                    id,type,title,tag,author,content,desc,imageIds:Images{id,path},createAt,brief
                }
                img:getBuildingImagesWhere(buildingImages:{type:$type2}){
                    id,imageIds:Images{id,path}
                }
            }`,
            variables: { type: `{ "$eq": "${this.type}" }`, type2: `{ "$eq": "${this.column}" }` }
        }).subscribe(({ data }) => {
            if (data && data.article && data.article[0]) {
                this.content = data.article[0].content;
            }
            if (data && data.img && data.img[0]) {
                this.img = data.img[0].imageIds[0].path;
            }
            console.log(this.img);
        });
    }
}