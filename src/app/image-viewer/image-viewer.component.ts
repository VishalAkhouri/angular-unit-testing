import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit, OnChanges {
  @Input() imageLocation;
  @Output() clickHandler = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.imageLocation);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  imageButtonClicked() {
    this.clickHandler.emit({done: true});
  }

}
