import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { USER } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/shared/services/data.service';
import { ImageService } from 'src/shared/services/image.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
})
export class UsersComponent implements OnInit {
  public selectedView: string;
  public heading: string;
  public description!: string;
  public displayedColumns: string[] = ['image', 'name', 'email', 'website'];
  public users: USER[] = [];
  public filteredUsers: USER[] = [];
  public dataSource!: MatTableDataSource<USER>;
  public appConstants = APP_CONSTANTS;

  constructor(
    private dataService: DataService,
    private imageService: ImageService
  ) {
    this.selectedView = APP_CONSTANTS.CARD;
    this.heading = APP_CONSTANTS.USERS;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  /**
   * Get Users List
   */
  getUsers() {
    this.users = [];
    this.dataService.users().subscribe((users: any) => {
      users.forEach((user: USER) => {
        this.users.push({
          email: user.email,
          image:
            this.imageService.randomUsersAvatar()[
              Math.floor(
                Math.random() * this.imageService.randomUsersAvatar().length
              )
            ],
          name: user.name,
          website: user.website,
        });
      });
      this.filteredUsers = this.users;
      this.dataSource = new MatTableDataSource<USER>(this.users);
      this.description = `Total ${this.users.length} ${
        this.users.length > 1 ? 'users' : 'user'
      }`;
    });
  }

  /**
   * Search For User
   * @param event
   */
  search(event: KeyboardEvent) {
    const searchValue: string = (
      event.target as HTMLInputElement
    ).value.toLocaleLowerCase();
    this.users = this.filteredUsers.filter((searchData: USER) => {
      return (
        searchData.name.toLocaleLowerCase().match(searchValue) ||
        searchData.email.toLocaleLowerCase().match(searchValue) ||
        searchData.website.toLocaleLowerCase().match(searchValue)
      );
    });
    this.dataSource = new MatTableDataSource<USER>(this.users);
  }

  /**
   * Show ALL or selected number enteries
   * @param event
   */
  showEntries(event: any) {
    if (event.target.value === APP_CONSTANTS.ALL) {
      this.getUsers();
    } else {
      this.users = [];
      this.users = this.filteredUsers.slice(0, event.target.value);
      this.dataSource = new MatTableDataSource<USER>(this.users);
    }
  }

  /**
   * Grid View Change
   * @param mode
   */
  changeGridView(mode: string) {
    this.selectedView = mode;
  }

  /**
   * Filter enteries and return specific numbers of records
   * @param length
   * @returns
   */
  filterEnterties(length: number) {
    return new Array(length);
  }
}
