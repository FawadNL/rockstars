import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { PlaylistDetailsPage } from './playlist-details.page';

describe('PlaylistDetailsPage', () => {
  let component: PlaylistDetailsPage;
  let fixture: ComponentFixture<PlaylistDetailsPage>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistDetailsPage],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistDetailsPage);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    router.initialNavigation();

    fixture.detectChanges();
    const state = router.getCurrentNavigation();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
