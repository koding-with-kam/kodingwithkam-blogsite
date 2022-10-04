import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HeaderComponent } from './header.component';
import  { By } from "@angular/platform-browser";
import { RouterLinkDirectiveStub } from "../../../../testing/router-link-directive-stub";
import { MaterialModule } from "../../../material";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let routerLinks: RouterLinkDirectiveStub[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [MaterialModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    let linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can get RouterLinks from template', () => {
    expect(routerLinks.length)
      .withContext('should have 3 routerLinks')
      .toBe(3);
    expect(routerLinks[0].linkParams).toBe('/dashboard');
    expect(routerLinks[1].linkParams).toBe('/heroes');
    expect(routerLinks[2].linkParams).toBe('/about');
  });
});
