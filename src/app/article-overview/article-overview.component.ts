import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {Apollo} from "apollo-angular";
import {GetArticles} from "../../queries/get-articles";
@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.css']
})
export class ArticleOverviewComponent {
  loading: boolean;
  articles: any;

  private querySubscription: Subscription;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GetArticles
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.articles = data.Articles.items;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
