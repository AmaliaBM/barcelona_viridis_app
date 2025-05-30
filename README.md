
# Barcelona Viridis 

## [See my App!](https://barcelonaviridis.netlify.app/)

![App Logo](/assets/BarcelonaViridis.svg)

## Description
This app invites users to explore, protect, and share information about urban vegetation in Barcelona, while learning about the importance of green spaces for urban health.

Barcelona Viridis is a collaborative application that was developed as a final project for Module 2 in the Web Development bootcamp offered by Ironhack.

#### [Client Repo here](https://github.com/AmaliaBM/barcelona_viridis_app)
#### [Server Repo here](https://github.com/AmaliaBM/barcelona_viridis_server)

## Technologies, Libraries & APIs used

HTML, CSS, Javascript, React, VITE, axios, Bootstrap, dashboard render,  netlify, cloudinary...

## Backlog Functionalities

Users can add, edit o delete urban Barcelona's vegetation in this App. 
Also they can red articles with information about positive impact of the green areas and vegetation in big cities. 

Theay can looking for something specific in the SearchBar. 
Vegetation and Barcelona neighborhood are conneting, so if you click in one neighborhood you'll see vegetation or green parks in this area. 

# Client Structure

## User Stories


- **404** - As a user I want to see a 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about, also I see articles of interest, search bar and a carousel of pictures.
- **place/vegetation list** - As a user I want to see all the vegetations and places in Barcelona. I have 2 lists: vegetation or places. 
- **new vegetation create** - As a user I want to create a new vegetation that I like so much in Barcelona, so that I add a new one in the form. I can add information, category and picture. 
- **edit vegetation** - As a user I can edit vegetation that i see in the app.
- **delete vegetation** - As a user I can delete vegetation that i see in the app, but always the APP ask me if I am totally sure about it.


## Client Routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Behavior                                                      |
| ------------------------- | ----------------| ----------------  |  ------------------------------------------------------------  |
| `/`                       | Home            |                   | Home page                                                     |
| `/about`                  | About          |                     | About me and a link to my linkedin.
| `/articles-of-interest`   | Article of interest           |      List articles of interest about positive impact of urban vegetation.
| `/articles/:id`                | Article details         | Navigate to an specific article.
| `/vegetation`             | Vegetation        | Vegetation | Shows all vegetation available in APP from Barcelona
| `/vegetation/category/:category`             | Vegetation       |  SearchBar                 | A searchbar to looking for category inside of the vegetation                                    |
| `/vegetation/:id`       | Vegetation   | Vegetationdetails         | Navigate to an specific vegetation.
| `/vegetation/:id/edit`       | EditVegetationPage          | Navigate to inside an specific vegetation and inside of this you can edit all info. 
| `/add-vegetation`       | AddFormVegetationPage         | Navigate to a form. Here it is possible add new vegetation in the APP.  
| `/places`       | PlaceListPage          | Navigate to Places List, here you can see all 
neighborhood.
| `/places/:id`       | PlaceDetailsPage          | If you click a specific place, the navigate to a card with information about this precise place.
| `*`       | NotFound          | Page not found route, error 404
## Other Components

- Navbar
- SearchBar
- CustomCarousel
- Places
- VegetationCard
  
### Project

[Repository Link Client](https://github.com/AmaliaBM/barcelona_viridis_app)

[Repository Link Server](https://github.com/AmaliaBM/barcelona_viridis_server)

[Deploy Link](https://barcelonaviridis.netlify.app/)

### Excalidraw: wireframes.

[Link my excalidraw board](https://excalidraw.com/#json=NVqOeU41E53FEVrCpBbDi,Mfr7oNH4Y0k8ekAgsnzNGA)

### Slides

[Slides Link](www.your-slides-url-here.com)