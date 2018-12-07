import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  flag = true;
  clickArray = [];

  changeFlag() {
    this.flag = !this.flag;
    this.clickArray.push(this.clickArray.length + 1);
  }
}
