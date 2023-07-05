import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { Users } from 'src/app/interfaces/users.interface';
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
  public displayedColumns: string[] = [
    'image',
    'name',
    'designation',
    'joining_date',
  ];
  public users: Users[] = [];
  public filteredUsers: Users[] = [];
  public dataSource!: MatTableDataSource<Users>;
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
    this.dataService.users().subscribe((users: Users[]) => {
      users.forEach((user: Users) => {
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
          designation: 'consectetur adipiscing',
          joining_date: '5 July 2023',
        });
      });
      this.filteredUsers = this.users;
      this.dataSource = new MatTableDataSource<Users>(this.users);
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
    this.users = this.filteredUsers.filter((searchData: Users) => {
      return (
        searchData.email.toLocaleLowerCase().match(searchValue) ||
        searchData.website.toLocaleLowerCase().match(searchValue) ||
        searchData.name.toLocaleLowerCase().match(searchValue)
      );
    });
    this.dataSource = new MatTableDataSource<Users>(this.users);
  }

  /**
   * Show ALL or selected number enteries
   * @param event
   */
  showEntries(event: Event) {
    this.users = [];
    const value = (event.target as HTMLInputElement)?.value;
    if (value === APP_CONSTANTS.ALL) {
      this.getUsers();
    } else {
      this.users = this.filteredUsers.slice(0, Number(value));
      this.dataSource = new MatTableDataSource<Users>(this.users);
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
   * Filter enteries and return records numbers
   * @param length
   * @returns
   */
  filterEnterties(length: number) {
    return new Array(length);
  }
}
