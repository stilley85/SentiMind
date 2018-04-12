# SentiMind

[Daniel Keen](https://github.com/DKeen0123) || [Marcus Gardiner](https://github.com/marcusfgardiner) || [Carlos Trapet](https://github.com/CarlosTrapet) || [Stephen Tilley](https://github.com/stilley85)

A twitter sentiment analysis web app based on a hashtag (using machine learning to assess sentiment)

You can find out what the world thinks about a topic of your choice on [sentimind.co.uk](http://sentimind.co.uk/).
Or just check the world's general sentiment on kittens and rainbows.

![SentiMind in action](https://media.giphy.com/media/5UvtFkTLx39wcZTyYY/giphy.gif)

# Warning

### Local host currently hardcoded in /hello route
### Deployment: can we deploy in one server and remove CORS from production enviornment?

## Tech Stack

#### Backend/Frontend
* Python/Flask
* React

#### Testing
* Jest/Enzyme
* Pytest

#### Deployment
* Docker
* AWS

#### Libraries
* Tweepy -- to make calls to the Twitter API
* NLTK -- a toolkit used for Natural Language Processing

## How to run locally

In order to run the server, you will need to [download python](https://www.python.org/downloads/) and then run: `pip3 install pipenv`

In the terminal:

1. clone the repository
2. From the root folder of the directory `pipenv install requests` to download the python dependencies
3. `pipenv shell`
4. `cd frontend`
5. `npm install` to download the react/npm dependencies

To run the backend server:

1. `cd backend`
2. `python3 server.py`

To run the frontend server:

1. `cd frontend`
2. `npm start`

## Tests

for Testing our ReactJS front end we used Jest with enzyme. To run the tests:

1. `cd fullstack_template/static`
2. `npm run test`
To run python tests:
1. Ensure you have run 'pipenv install requests' and 'npm install' as above to download dependencies
2. 'pipenv shell' to set up the python environment
3. 'nosetests' to run tests

## Challenges

* Sticking to the single responsibility principle while designing the GET request -method using Tweepy
* Hard coding the word "sad" into the query for test purposes and then forget we did it, causing a minor breakdown and assuming "Twitter is just a really depressing place"
