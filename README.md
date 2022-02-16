### Scenario
Cinema operators such as Cathay are one of the most popular merchants we have in Fave. We want to build an app to help our users discover movies easily.

Create a standalone movie app / mobile web(responsive UI) with the following screens:

### **Home screen with list of available movies**

- Ordered by release date (default), alphabetical, rating - can use dropdown 
- Pull to refresh
- Load when scrolled to bottom
- Each movie to include:
  - Poster/Backdrop image
  - Title
  - Popularity
    
### **Detail screen**
Movie details should have the following:
- Synopsis
- Genres
- Language
- Duration
- Book the movie (simulate opening of this [link](https://www.cathaycineplexes.com.sg/) in a web view)

### **Frontend Design**
ReactJS

### **Backend**
Use the API from [TMDb](https://developers.themoviedb.org/3/getting-started/introduction) as your data source.

API Key: `328c283cd27bd1877d9080ccb1604c91`
  
**Sample requests:**

Listing

```
http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&primary_release_date.lte=2016-12-31&sort_by=release_date.desc&page=1
```

Detail

```
http://api.themoviedb.org/3/movie/328111?api_key=328c283cd27bd1877d9080ccb1604c91
```

### Technical requirements:

|Web (ReactJS) |
| ---- |
| React based framework (ReactJS, create-react-app, etc) |
| CSS or SASS |
| Context API & hooks | 
| Use correct routes, param & URL (include navigation & not found routes) |
| using typescript |

