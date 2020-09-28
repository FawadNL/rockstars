import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AlertService } from 'src/app/services';

import { ArtistDetailsPage } from './artist-details.page';

describe('ArtistDetailsPage', () => {
  let component: ArtistDetailsPage;
  let fixture: ComponentFixture<ArtistDetailsPage>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistDetailsPage],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientModule],
      providers: [AlertService],
    }).compileComponents();

    router = TestBed.inject(Router);
    router.initialNavigation();

    fixture = TestBed.createComponent(ArtistDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
