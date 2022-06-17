// TODO: Get JSON from a URL
// I should go through sitepoint Ajax page again.
// Maybe do github search project??!!

fetch('https://api.github.com/orgs/nodejs', {
  headers: new Headers({
    'User-agent': 'Mozilla/4.0 Custom User Agent'
  })
})
.then(response => response.json())
.then(data => {
  console.log(data)
})
.catch(error => console.error(error))