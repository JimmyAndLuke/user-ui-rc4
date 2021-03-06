import { Component } from "@angular/core";
import { LayoutNav } from "./_layout/nav";
import { AuthorApi } from "./_data/authors/index";
import { ArticleApi } from "./_data/articles/index";
import { BookApi } from "./_data/books/index";
import { ColumnApi } from "./_data/columns/index";
import { NewsApi } from "./_data/news/index";
import { ThreadApi } from "./_data/threads/index";
import { ResourceApi } from "./_data/resources/index";
import { PartnerApi } from "./_data/partners/index";
import { ShowcaseApi } from "./_data/showcases/index";
import { Auth } from "./_common/services/auth";

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [
    require('./app.scss')
  ],
  directives: [LayoutNav],
  providers: [ColumnApi, AuthorApi, ArticleApi, BookApi, NewsApi, ThreadApi, ResourceApi, PartnerApi, ShowcaseApi, Auth]
})
export class App {
  constructor() {

  }

  ngOnInit() {
  }
}
