# Using the Fetch API to get Random Users

> Retrieve a list of users from the Random User API and list them on our site.

## Tech & Dependencies

- JavaScript
- [API: Random User Generator](https://randomuser.me/)


## Install and Run

- Download and unzip
- Open index.html in a browser


## Notes

### A Simple Fetch API Call
```js
fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // Code for handling the data you get from the API
})
.catch(function() {
    // code for any errors returned by the server
})
```

### Posting Data with Fetch

```js
const url = 'https://randomuser.me/api';

// The data to be send in the request
let data = {
    name: 'Sara'
}

// Create the request constructor with needed parameters
var request = new Request(url, {
    method: 'POST', 
    body: data, 
    headers: new Headers()
});

fetch(request)
.then(function() {
    // Handle the response from the API
})
```

## Sources

- [Scotch.io Tutorial: How to Use the JavaScript Fetch API to Get Data](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#toc-handling-more-requests-like-post)
- [API: Random User Generator](https://randomuser.me/)
- [MDN: Using fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: Introduction to Web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)

