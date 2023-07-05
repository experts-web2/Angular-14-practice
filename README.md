# Angular-14-practice
Sample Angular Application using Material-UI

Project contains different folders, out of which main folders are 
•	Styles
•	App
•	Shared
•	Services
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
This folder contains 3 types of services
1.	DataService
2.	ImageService
3.	FormatingService
DataService is responsible for handling API calls. It can contain many child services based on our Modules like Users and Blogs
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





