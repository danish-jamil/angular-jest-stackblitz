import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "NoSniffOptionTest";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // markDirty(this);
  }

  ngAfterViewInit() {
  }
}
