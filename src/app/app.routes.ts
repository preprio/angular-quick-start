import { Routes } from '@angular/router';

import {PostOverviewComponent} from './post-overview/post-overview.component';
import {PostDetailComponent} from './post-detail/post-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: PostOverviewComponent,
    },
    {
        path: ':slug',
        component: PostDetailComponent,
    },
];