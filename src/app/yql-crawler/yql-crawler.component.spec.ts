import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YqlCrawlerComponent } from './yql-crawler.component';

describe('YqlCrawlerComponent', () => {
  let component: YqlCrawlerComponent;
  let fixture: ComponentFixture<YqlCrawlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YqlCrawlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YqlCrawlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
