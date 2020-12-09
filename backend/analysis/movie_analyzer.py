from .Soup import Soup
from .Movie import Movie
from .sentiment_analysis import sentiment_analysis

# Movies: The list of movies and their rankings by their user. The 'index' field of a movie is its ranking
# Example: [{'id': 1, 'title': 'Movie 1', 'index': 1}, {'id': 2, 'title': 'Movie 2', 'index': 2}, {'id': 3, 'title': 'Movie 3', 'index': 3}]
def analyze_movies(movies):
    # Formats the movie titles to metacritic url standards
    movie_title_formatter(movies)

    # Adds movie property to hold the Movie object
    movie_object_generator(movies)

    # Perform the sentiment analysis 
    ranked_list = sentiment_analysis(movies)

    # Format the response for the frontend
    response = format_response(ranked_list)

    # We need to decide what to return. Depends on how we want to present the results
    return {'message': response}

def format_response(ranked_list):
    return ranked_list

def movie_title_formatter(movies):
    for movie in movies:
        movie['title'] = movie['title'].replace(' ','-').replace(':','').lower()

def movie_object_generator(movies):
    for movie in movies:
        tempMovie = Movie(movie["title"], Soup())
        tempMovie.set_all_reviews()
        movie["movie"] = tempMovie
