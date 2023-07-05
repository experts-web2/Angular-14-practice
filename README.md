# Angular-14-practice
Sample Angular Application using Material-UI

# Project Structure
Project contains different folders, out of which main folders are 

•	Styles

•	App

•	Shared

•	Services

![image](https://github.com/experts-web2/Angular-14-practice/assets/50547433/d6075096-7b98-4b95-96c7-87bdd5215321)


# Styles
This folder contains global styles, like primary color, background color and any other global css settings can be placed here

# Shared
This folder contains 3 folders

•	Components

•	Modules

•	Services


# Components
This folder contains 2 shared components
1.	Description Bar
2.	Hearder

# Modules
It has 2 modules
1.	Material Module
2.	Shared Module

Material Module contains all references of Material UI modules. So our application will consume Material Module everywhere, instead of adding reference of Material UI module in each module

Shared Module contains shared components like Header and Description Bar

# Services
This folder contains 5 types of services
1.	BlogService
2.	ImageService
3.	FormatingService
4.	DashboardService
5.	UserService


BlogService deals with Blogs
UserService deals with Users
DashboardService deals with Home -> Dashboard Details
ImageService deals with Images
FormatingService deals with Text handling


# App
This is our main folder containing most part of application. It contains these folders:
1.	Constants
2.	Interfaces
3.	Modules
# Constants
This folder contains files having Constants related to API, App and Routes
# Interfaces
This folder contains files for our Business entities like Users, Blogs etc.
# Modules
Each Business entity is treated as a separate Module, to keep things separate and easy to manage. Also will help us out in performance optimization using Lazy Loading etc
# Unit Test
Each Component have unit test cases written in jasmine






