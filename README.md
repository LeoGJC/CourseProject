# CourseProject
## Overview of the project
This repository consists of two applications -- a web frontend and a python backend. Given a list of movies from the user on the frontend, it will be sent to the backend for processing. The backend will scrape reviews of the movies, do sentiment analysis, and compose a ranking of the movies based on this analysis. Then the user can compare their ranking of movies with the sentiment analyzer's rankings.

## Member Contributions
See the Proposal.md file in the root of the repository for a breakdown of what each member contributed.

## Implementation
Details about how the software work and its implementation can be found in Proposal.md and PROGRESS_UPDATE.md

## Running the project
#### Prereqs
Must have the following software installed:
* [Python 3.7](https://www.python.org/downloads/release/python-379/)
* Pip 3
* [NodeJS 14.15.0](https://nodejs.org/download/release/v14.15.0/)
* Flask (See below)
* Yarn (See below)

### Installing Flask and Yarn
From anywhere in your command line, to install flask (and other dependencies), run
```
pip install flask
pip install flask_cors
pip install requests
pip install bs4
pip install html5lib
pip install nltk
```
And to install yarn, run
```
npm install -g yarn
```

#### Running the Backend
Navigate to the backend/ directory and run the following command:
```
flask run
```
This will start the backend on port 5000

#### Running the Frontend
Navigate to the frontend/ directory and run the following two commands in order:
```
yarn
yarn start
```
This will start the frontend on port 3000.
