import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';

import { HeaderComponent } from './header.component';
import  { By } from "@angular/platform-browser";
import { RouterLinkDirectiveStub } from "../../../../testing/router-link-directive-stub";
import { MaterialModule } from "../../../material";

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent {
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let routerLinks: RouterLinkDirectiveStub[];
  let linkDes: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, RouterLinkDirectiveStub ],
      imports: [MaterialModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can get RouterLinks from template', () => {
    expect(routerLinks.length)
      .withContext('should have 1 routerLinks')
      .toBe(2);
    expect(routerLinks[0].linkParams).toBe('/');
  });
});
