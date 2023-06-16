import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {Apollo} from "apollo-angular";
import {GetArticles} from "../../queries/getArticles";
import {GetArticleBySlug} from "../../queries/getArticleBySlug";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  loading: boolean;
  article: any;
  slug: string;


  private querySubscription: Subscription;
  constructor(private apollo: Apollo, private router: Router, private activatedRoute:ActivatedRoute) {
    this.slug = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    console.log(this.slug)
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GetArticleBySlug,
        variables: {
          slug: this.slug
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.article = data.Article;
        console.log(data.Article)
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
