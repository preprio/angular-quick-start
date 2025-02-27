import { Component, effect, inject } from '@angular/core';
import { PreprService } from '../services/prepr.service';
import { GetArticleBySlug } from '../queries/get-article-by-slug';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {
  article: any = {};

  private route = inject(ActivatedRoute);
  private preprService = inject(PreprService);

  constructor() {
    effect(async () => {
      const slug = this.route.snapshot.paramMap.get('slug');

      const response = await this.preprService.fetchData(GetArticleBySlug, { slug });
      this.article = response.data.Article;
    });
  }
}