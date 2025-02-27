import { Routes } from '@angular/router';

import {ArticleOverviewComponent} from './article-overview/article-overview.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: ArticleOverviewComponent,
    },
    {
        path: ':slug',
        component: ArticleDetailComponent,
    },
];