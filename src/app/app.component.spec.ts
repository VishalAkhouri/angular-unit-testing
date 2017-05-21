import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ImageViewerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  describe('testClick', () => {
    it('should remove the url', () => {
      // Given
      const fixture = TestBed.createComponent(AppComponent);
      let component: AppComponent = fixture.componentInstance;
      fixture.detectChanges();

      let event = { data: 'event1'};
      // When
      component.testClick(event);

      // Then
      expect(component.url).toEqual('');
    });
  });
});
