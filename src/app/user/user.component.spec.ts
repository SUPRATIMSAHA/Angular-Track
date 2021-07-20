import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { DataService } from '../shared/data.service';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    dataService = fixture.debugElement.injector.get(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the username from the service', () => {
    expect(userService.user.name).toEqual(component.user.name);
  })

  it('should display user name if user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').textContent).toContain(component.user.name);
  })

  it('shouldn\'t display user name if user is not logged in', () => {
    expect(fixture.nativeElement.querySelector('p').textContent).not.toContain(component.user.name);
  })

  it('shouldn\'t fetch data sucessfully if not called asynchronously', () => {
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges()
    expect(component.data).toBe(undefined);
  })

  it('shouldn fetch data sucessfully if called asynchronously', waitForAsync(() => {
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    })
  }))

  it('shouldn fetch data sucessfully if called asynchronously', fakeAsync(() => {
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges()
    tick();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    })
  }))
});
