import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnChanges } from '@angular/core';

@Component ({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})

export class StarsComponent implements OnChanges {

  @Input()
  rating: number = 0;

  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 74/5;
  }
}
