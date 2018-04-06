import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { Article } from '../models/Article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})

export class ArticleDetailComponent implements OnInit {
	
  public article: Article = {};  
  
  constructor(
    private route:ActivatedRoute,
    private articleService: ArticleService,
    private location: Location) { }

  ngOnInit():void {
  	this.getArticle();
  }

  getArticle():void {
    const id = +this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.articleService.getArticleByID(id)
      .subscribe(article => {
          this.article = article;
          console.log(this.article.id);
        });
      //.subscribe(article => this.article = article);
  }



}
