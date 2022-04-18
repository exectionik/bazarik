import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {filter} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let child = this.route.firstChild;

        while (true) {
          if (child?.firstChild) {
            child = child.firstChild;
            continue;
          } else if (child?.snapshot.data) {
            const title: string | null = child.snapshot.data['title'];

            if (title) {
              return title;
            }
          }

          return null;
        }
      })
    ).subscribe(titlePart => {
      const title = titlePart ? `${titlePart} - predajto` : 'predajto';
      this.titleService.setTitle(title);
    });
  }

}
