import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: User[];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsersList().subscribe(
      (data)=>{
        console.log(data[0])
        this.usersList=data;
      }
    )
  }

  getUserDetails(id:number){
    this.usersService.getSingleUser(id).subscribe(
      (data)=>{
        this.usersService.userDetailed=data;
      }
    )
  }

  addUser(){
    let user={
      first_name: 'Ricardo',
      last_name: 'Galan',
      age: 30,
      id:100
    }
    this.usersService.createUser(user).subscribe(
      (data)=>{
        console.log(data);
        this.getUsers();
      }
    )
  }

  updateUser(user: User){
    let userToUpdate=user;
    userToUpdate.first_name='Andres';
    userToUpdate.last_name='Gonzales';
    userToUpdate.age=90;

    this.usersService.updateUser(userToUpdate).subscribe(
      (data)=>{
        this.getUsers();
      }
    )
  }

  deleteUser(id:number){
    this.usersService.deleteUser(id).subscribe(
      ()=>{
        this.getUsers();
      }
    )
  }

}
