import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {ArticleOverviewComponent} from "./article-overview/article-overview.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";

@NgModule({ declarations: [
        AppComponent,
        ArticleOverviewComponent,
        ArticleDetailComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        GraphQLModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
