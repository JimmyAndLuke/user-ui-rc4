import { Component } from "@angular/core";
import { ThreadApi } from "../../_data/threads/index";
import { ActivatedRoute } from "@angular/router";
import { Thread } from "../../_common/models/thread";
import { BasePage } from "../../_common/components/base/page";
import { Observable } from "rxjs/Observable";
import { ThreadDetails } from "./details";
import { matchById } from "../../_common/operators/match-by-id";
import { BbsLayoutNav } from "../_layout/nav";

@Component({
  selector: 'thread-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [ThreadDetails, BbsLayoutNav]
})
export class ThreadShow extends BasePage {
  constructor(private api: ThreadApi, activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }

  item: Observable<Thread>;

  reload(params) {
    this.item = this.api.query()
      .find(matchById(params.id));
  }
}
