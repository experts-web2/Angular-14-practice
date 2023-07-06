import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { DescriptionBarComponent } from 'src/shared/components/description-bar/description-bar.component';
import { BlogService } from 'src/shared/services/blogs.service';
import { ImageService } from 'src/shared/services/image.service';
import { UsersComponent } from './users.component';
import { UserService } from 'src/shared/services/users.service';
import { MaterialModule } from 'src/shared/modules/material.module';
import { MatIconModule } from '@angular/material/icon';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let dataServiceMock: jasmine.SpyObj<BlogService>;
  let userServiceMock: jasmine.SpyObj<UserService>;

  let imageServiceMock: jasmine.SpyObj<ImageService>;

  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj('UserService', ['users']);
    imageServiceMock = jasmine.createSpyObj('ImageService', [
      'randomUsersAvatar',
    ]);
    await TestBed.configureTestingModule({
      declarations: [UsersComponent, DescriptionBarComponent],
      providers: [BlogService, UserService, ImageService],
      imports: [HttpClientTestingModule, MaterialModule, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users and set properties correctly', () => {
    const randomAvatar = 'https://i.ibb.co/8gT1pZ2/cd.jpg';

    const users = [
      {
        email: 'test1@example.com',
        name: 'Test 1',
        website: 'https://example1.com',
        image: randomAvatar,
        designation: 'consectetur adipiscing',
        joining_date: '5 July 2023',
      },
      {
        email: 'test2@example.com',
        name: 'Test 2',
        website: 'https://example2.com',
        image: randomAvatar,
        designation: 'consectetur adipiscing',
        joining_date: '5 July 2023',
      },
    ];
    component.users = users;
    expect(component.users.length).toEqual(2);
    expect(component.users).toEqual(users);

  });

  it('should return an array of the specified length', () => {
    const length = 5;
    const result = component.filterEnterties(length);
    expect(result).toEqual(jasmine.any(Array));
    expect(result.length).toBe(length);
  });

  it('should filter users based on search value', () => {
    const mockEvent = {
      target: {
        value: 'user2',
      },
    } as unknown as KeyboardEvent;

    component.filteredUsers = [
      { name: 'user1', email: 'user1@gmail.com', website: 'https://user1.com' },
      {
        name: 'user2',
        email: 'user2@example.com',
        website: 'https://user2.com',
      },
      {
        name: 'user3',
        email: 'user3@example.com',
        website: 'https://user3.com',
      },
    ];

    component.search(mockEvent);

    expect(component.users).toEqual([
      {
        name: 'user2',
        email: 'user2@example.com',
        website: 'https://user2.com',
      },
    ]);
  });

  it('should update the selectedView property', () => {
    const mode = 'list';
    component.changeGridView(mode);
    expect(component.selectedView).toBe(mode);
  });
});
