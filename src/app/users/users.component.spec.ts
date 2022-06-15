import { HttpClientModule } from "@angular/common/http"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { BrowserModule } from "@angular/platform-browser"
import { of } from "rxjs"
import { UsersService } from "../users.service"
import { UsersComponent } from "./users.component"

describe('UsersComponent', ()=>{
    let component: UsersComponent
    let fixture: ComponentFixture<UsersComponent>
    let usersService: UsersService

    beforeEach(async () =>{
        await TestBed.configureTestingModule(
        {
            declarations: [UsersComponent],
            imports: [
                BrowserModule,
                HttpClientModule
            ],
            providers:[
                UsersService
            ]
        }
        )
        .compileComponents();
    })
    beforeEach(()=>{
        fixture= TestBed.createComponent(UsersComponent);
        component= fixture.componentInstance;
        usersService=TestBed.inject(UsersService);

        spyOn(usersService, "getUsersList").and.returnValue(
            of(
                [
                    {
                        first_name:'Ricardo',
                        last_name: 'Galan',
                        id:1,
                        age:30
                    }
                ]
            )
        )
        component.ngOnInit();
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
      });
})