import { Component, effect, inject } from '@angular/core';
import { PreprService } from '../services/prepr.service';
import { GetPostBySlug } from '../queries/get-post-by-slug';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  post: any = {};

  private route = inject(ActivatedRoute);
  private preprService = inject(PreprService);

  constructor() {
    effect(async () => {
      const slug = this.route.snapshot.paramMap.get('slug');

      const response = await this.preprService.fetchData(GetPostBySlug, { slug });
      this.post = response.data.Post;
    });
  }
}