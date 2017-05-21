import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerComponent } from './image-viewer.component';

describe('ImageViewerComponent', () => {
  let component: ImageViewerComponent;
  let fixture: ComponentFixture<ImageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // event emitter testing: http://stackoverflow.com/questions/35319476/any-way-to-test-eventemitter-in-angular2# 
  describe('imageButtonClicked()', () => {
    it('should click handle', () => {
      // Given
      spyOn(component.clickHandler, 'emit');

      // When
      component.imageButtonClicked();

      // Then
      expect(component.clickHandler.emit).toHaveBeenCalledWith({done: true});
    });
  });
});
