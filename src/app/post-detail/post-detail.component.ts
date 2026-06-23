import { Component, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { PreprService } from '../services/prepr.service';
import { GetPostBySlug } from '../queries/get-post-by-slug';
import { ActivatedRoute } from '@angular/router';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  post: any = {};

  private route = inject(ActivatedRoute);
  private preprService = inject(PreprService);

  constructor() {
    effect(async () => {
      const slug = `blog/${this.route.snapshot.paramMap.get('slug')}`;

      const response = await this.preprService.fetchData(GetPostBySlug, { slug });
      this.post = response.data.Post;
    });
  }
}