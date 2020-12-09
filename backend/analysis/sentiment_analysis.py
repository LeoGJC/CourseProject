import nltk
nltk.download('vader_lexicon')
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# Performs sentiment analysis on a list of movie objects
# Returns a list of tuples, where the first item is the movie and the second is its score
def sentiment_analysis(movies):
    output = []

    for movie in movies:
        sum = 0
        sentences = movie["movie"].get_all_reviews()
        sid = SentimentIntensityAnalyzer()
        size = len(sentences)

        if size == 0:
            raise Exception("Could not find review for movie (" + movie['title'] + "). Make sure it's spelled correctly according to metacritic")
        
        for sentence in sentences:
            ss = sid.polarity_scores(sentence)
            sum += ss['compound']
        average = sum / size
        output.append((movie['title'], average))

    output.sort(key=lambda x:x[1], reverse=True)
    return output