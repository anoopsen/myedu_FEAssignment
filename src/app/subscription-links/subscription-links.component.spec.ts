import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionLinksComponent } from './subscription-links.component';

describe('SubscriptionLinksComponent', () => {
  let component: SubscriptionLinksComponent;
  let fixture: ComponentFixture<SubscriptionLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionLinksComponent]
    });
    fixture = TestBed.createComponent(SubscriptionLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
