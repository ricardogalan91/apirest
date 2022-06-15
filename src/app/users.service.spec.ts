import { UsersService } from "./users.service"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
describe('UsersService', ()=>{
    let service:UsersService;
    let mockResponseLit=[
        {
            first_name:'Ricardo',
            last_name:'Galan',
            id:1,
            age:30
        }
    ]
    let httpController: HttpTestingController;
    let url='https://62a7cc3c97b6156bff931bb0.mockapi.io/api/v1/users/';

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })
        service= TestBed.inject(UsersService);
        httpController= TestBed.inject(HttpTestingController)
    })

    it('should be created', ()=>{
        expect(service).toBeTruthy();
    })
})