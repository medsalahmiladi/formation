import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/phase.service';

@Component({
  selector: 'app-root',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit {

  users: User[];
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean;
  editedUser: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  showEditUserForm(user: User) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: User) {
    if (this.isNewUser) {
      // add a new user
      this.userService.addUser(user);
    }
    this.userForm = false;
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: User) {
    this.userService.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

}
