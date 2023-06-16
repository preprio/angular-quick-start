import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleDetailComponent} from "./article-detail/article-detail.component";
import {ArticleOverviewComponent} from "./article-overview/article-overview.component";

const routes: Routes = [
  {path: "", component: ArticleOverviewComponent},
  {path: ":id", component: ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
