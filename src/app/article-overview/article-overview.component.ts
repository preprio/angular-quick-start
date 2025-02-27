import { Component, effect, inject } from '@angular/core';
import { PreprService } from '../services/prepr.service';
import { GetArticles } from '../queries/get-articles';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.css']
})
export class ArticleOverviewComponent {
  articles: any[] = [];
  private preprService = inject(PreprService);

  constructor() {
    effect(async () => {
      const response = await this.preprService.fetchData(GetArticles);
      this.articles = response.data.Articles.items;
    });
  }
}