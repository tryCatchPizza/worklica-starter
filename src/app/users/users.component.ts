import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  roles: Array<string>;
  isEditMode: boolean;
  model: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.model = new User();
    this.getData();
  }

  getData() {
    forkJoin([
      this.userService.getUsers(),
      this.userService.getRoles()
    ]).subscribe(result => {
      this.users = result[0];
      this.roles = result[1];
    });
  }

  async addUser() {
    const users = await this.userService.saveUser(this.model);
    this.users = users;
    this.model = new User();
  }

  editUser(user: User) {
    this.isEditMode = true;
    this.model = JSON.parse(JSON.stringify(user));
  }

  async save() {
    const users = await this.userService.editUser(this.model);
    this.users = users;
    this.model = new User();
    this.isEditMode = false;
  }

  cancel() {
    this.model = new User();
    this.isEditMode = false;
  }
}

