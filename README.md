# shobaike-janao-music-promo-website
Shobaike Janao is a project that I decided to build for my CSE391 course. The idea is that it is a platform which aims to solve a very common problem for musicians which is promoting their music, upcoming shows, merch releases etc. Hence the name, 'Shobaike Janao' which means let everyone know in Bengali. This platform allows musicians to post in text based formats. It also allows for audiences to have their profiles so that they can post their thoughts as well. The artist and the audience post feeds are separate. The posts also have an upvote button. There is no particular order that whose posts will be shown on top. One who posts the latest will have their posts shown on top of the feed. 

## Tech Stack:
For this project, I chose to use ReactJS for the frontend and Django for the backend. For the database, I chose SQLite. I chose ReactJS for the frontend to get my feet wet with it and to get to know it better. I chose Django for the backend because it provides a quick basic setup. Django REST Framework was used on top of it to convert the data pulled from the SQLite database to convert it to an API. I used SQLite because it is very to use with Django and Django also allows frequent changes in the SQLite database to be easy and less complicated. Django's ORM makes it easy to use too. 

## How to setup:
  ## 1. Clone the Repository:
  ```git clone https://github.com/Raahim-Rubaiyat-Teertho/shobaike-janao-music-promo-website.git```

  ## 2. Navigate to the project directory:
  ```cd shobaike-janao-music-promo-website```

  ## 3. Navigate to the backend folder:
  ```cd backend```

  ## 4. Install the dependencies:
  ```pip install -r requirements.txt```

  ## 5. Run the migrations:
  ```python manage.py migrate```
  
  ## 6. Run the development server:
  ```python manage.py runserver```
  
  ## 7. Navigate back to the root directory:
  ```cd ..```

  ## 8. Navigate to the frontend folder:
  ```cd frontend```

  ## 9. Install the dependencies:
  ```npm install```

  ## 10. Run the development server:
  ```npm run dev```
