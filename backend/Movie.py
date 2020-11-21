import requests
from bs4 import BeautifulSoup



class Movie:

    def __init__(self, title):
        self.title = title
        self.user_reviews = []
        self.critic_reviews= []
        self.reviews = []
        self.user_review_count = 0
        self.critic_review_count = 0
        self.review_count = 0
        self.user_pages = 0
        self.critic_review_pages = 0

    def get_soup(self,type,page='0'):
        user_agent = {'User-agent': 'Mozilla/5.0'}
        if(type == 'user'):
            url = f'https://www.metacritic.com/movie/{self.title}/{type}-reviews?page={page}'
        else:
            url = f'https://www.metacritic.com/movie/{self.title}/{type}-reviews'
        r = requests.get(url, headers= user_agent)
        return BeautifulSoup(r.content, 'html5lib')

    def get_user_reviews(self):
        for i in range(self.user_pages):
            temp = self.get_soup('user',i)
            for result in temp.find_all('span', class_='blurb blurb_expanded'):
                    self.user_reviews.append(result.text.strip())
                    self.user_review_count+=1

    def get_critic_reviews(self):
        temp = self.get_soup('critic')
        for result in temp.find_all('a', class_='no_hover'):
            self.critic_reviews.append(result.text.strip())
            self.critic_review_count+=1

    def get_user_page_num(self):
        user_soup = self.get_soup('user')
        for result in user_soup.find_all('li', class_='last_page'):
            self.user_pages = int(result.text)

    #Main Generator Method
    def get_all_reviews(self):
        self.get_user_page_num()
        self.get_user_reviews()
        self.get_critic_reviews()
        self.reviews = self.user_reviews + self.critic_reviews
        self.review_count = self.user_review_count + self.critic_review_count


m = Movie('the-matrix')

m.get_all_reviews()
print(m.user_review_count,' ',len(m.user_reviews))
print(m.critic_review_count,' ',len(m.critic_reviews))
print(m.review_count,' ',len(m.reviews))
#print(m.reviews)
#print(m.critic_reviews)
#print(m.user_reviews)
