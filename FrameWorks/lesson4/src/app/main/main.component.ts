import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
