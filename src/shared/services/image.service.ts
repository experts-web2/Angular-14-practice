import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  constructor(public http: HttpClient) {}

  /**
   * Random Users Avatar
   * @returns
   */
  randomUsersAvatar() {
    return [
      'https://i.ibb.co/WcVSQCR/3.jpg',
      'https://i.ibb.co/0VxrX3J/4.jpg',
      'https://i.ibb.co/gS87RQT/5.jpg',
      'https://i.ibb.co/PTfx53H/sssssss.webp',
      'https://i.ibb.co/Y3d8SGr/test.jpg',
      'https://i.ibb.co/8gT1pZ2/cd.jpg',
    ];
  }

  /**
   * Random Blog Images
   * @returns
   */
  randomBlogImages() {
    return [
      'https://i.ibb.co/3myLSgt/0e0314-cedfd801c21c4003bb52f544926b4127-mv2.webp',
      'https://i.ibb.co/8jPykXp/72c0b2-58cde2ebb708454fb4aa74c2b5c1b648-mv2.webp',
      'https://i.ibb.co/SyTLZ8X/Best-Blogging-Platforms-featured-image.png',
      'https://i.ibb.co/Hg5R5d3/download.jpg',
      'https://i.ibb.co/cxCr8Xt/website-blog.jpg',
      'https://i.ibb.co/v4vxGqV/wix.webp',
    ];
  }
}
