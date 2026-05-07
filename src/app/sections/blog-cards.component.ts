import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-cards',
  standalone: true,
  template: `
    <section class="section-space">
      <div class="container">
        <div class="blog-header">
          <p class="section-pretitle">From the blog</p>
          <h2 class="section-title">News &amp; Articles</h2>
        </div>
        <div class="blog-grid">
          @for (post of posts; track post.title) {
            <article class="blog-card">
              <div class="blog-card__image" [style.background-image]="post.image"></div>
              <div class="blog-card__body">
                <p>{{ post.meta }}</p>
                <h3>{{ post.title }}</h3>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .blog-header {
      margin-bottom: 30px;
      text-align: center;
    }

    .blog-grid {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .blog-card {
      background: #fff;
      box-shadow: 0 22px 70px rgba(15, 11, 22, 0.08);
    }

    .blog-card__image {
      background-position: center;
      background-size: cover;
      min-height: 320px;
    }

    .blog-card__body {
      padding: 22px 24px 28px;
    }

    .blog-card__body p {
      color: var(--color-primary);
      margin: 0 0 8px;
      text-transform: uppercase;
    }

    .blog-card__body h3 {
      margin: 0;
    }

    @media (max-width: 900px) {
      .blog-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BlogCardsComponent {
  protected readonly posts = [
    {
      meta: 'Technology',
      title: 'How modern IT teams cut response time without adding chaos',
      image: "url('https://www.figma.com/api/mcp/asset/53f3ade2-dbec-432f-83d2-7e769d28e6db')"
    },
    {
      meta: 'Security',
      title: 'What to review before your next infrastructure refresh',
      image: "url('https://www.figma.com/api/mcp/asset/88a744f8-c6cd-4617-be6c-0a5969a416da')"
    },
    {
      meta: 'Operations',
      title: 'A cleaner way to align tools, people and delivery milestones',
      image: "url('https://www.figma.com/api/mcp/asset/e8b3de02-2ef9-4b34-99a2-77ee2939829e')"
    }
  ];
}
