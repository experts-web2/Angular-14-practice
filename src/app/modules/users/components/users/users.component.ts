import { DatePipe } from '@angular/common'; // Import the DatePipe
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { Users } from 'src/app/modules/users/interfaces/users.interface';
import { UserService } from '../../services/user.service';

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
  private unsubscribe$ = new Subject();

  constructor(private userService: UserService, private datePipe: DatePipe) {
    this.selectedView = APP_CONSTANTS.CARD;
    this.heading = APP_CONSTANTS.USERS;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  /**
   * Get Users List
   */
  getUsers(): void {
    this.users = [];
    this.userService
      .users()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (users: Users[]) => {
          users.forEach((user: Users) => {
            this.users.push({
              email: user.email,
              image:
                this.userService.randomUsersAvatar()[
                  Math.floor(
                    Math.random() * this.userService.randomUsersAvatar().length
                  )
                ],
              name: user.name,
              website: user.website,
              designation: APP_CONSTANTS.DESIGNATION,
              joining_date: this.datePipe.transform(new Date(), 'longDate'),
            });
          });
          this.filteredUsers = this.users;
          this.dataSource = new MatTableDataSource<Users>(this.users);
          this.description = `${APP_CONSTANTS.TOTAL} ${this.users.length} ${
            this.users.length > 1 ? APP_CONSTANTS.USERS : APP_CONSTANTS.USER
          }`;
        },
        error: (error) => {
          console.error(APP_CONSTANTS.ERROR, error);
        },
      });
  }

  /**
   * Search For User
   * @param event
   */
  search(event: KeyboardEvent): void {
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
  showEntries(event: Event): void {
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
  changeGridView(mode: string): void {
    this.selectedView = mode;
  }

  /**
   * Filter enteries and return records numbers
   * @param length
   * @returns
   */
  filterEnterties(length: number): number[] {
    return new Array(length);
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
