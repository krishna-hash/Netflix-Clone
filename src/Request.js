const API_KEY = "5b2f295cd045cac10373cc4656a31215";

const request = {
  Netflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  Action: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  Kidsmovies: `discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
  Comedy: `discover/movie?api_key=${API_KEY}&with_genres=35&with_cast=23659&sort_by=revenue.desc`,
  Romantic: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Theater: `discover/movie?api_key=${API_KEY}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`,
  Rrated: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  Document: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
