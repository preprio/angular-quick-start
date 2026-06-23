import { Component, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { PreprService } from '../services/prepr.service';
import { GetPosts } from '../queries/get-posts';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-overview',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-overview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./post-overview.component.css']
})
export class PostOverviewComponent {
  posts: any[] = [];
  private preprService = inject(PreprService);

  constructor() {
    effect(async () => {
      const response = await this.preprService.fetchData(GetPosts);
      this.posts = response.data.Posts.items;
    });
  }
}
