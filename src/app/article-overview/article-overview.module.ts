import {NgModule} from "@angular/core";
import {ArticleOverviewComponent} from "./article-overview.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ArticleOverviewComponent],
  imports: [RouterModule],
  bootstrap: [ArticleOverviewComponent]
})
export class ArticleOverviewModule {}
