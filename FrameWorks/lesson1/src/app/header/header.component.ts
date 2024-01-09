import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isVisible = false;
  public isDisabled = false;

  public setVisibility() {
    this.isVisible = !this.isVisible;
    this.isDisabled = true;
  }

  ngOnInit(): void {}

  ButtonClick() {}
}
