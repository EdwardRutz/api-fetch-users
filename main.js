"use strict";
console.log("main.js loaded");

//Create elements
function createNode(element) {
  return document.createElement(element);
}

//Append elements
function append(parent, el) {
  return parent.appendChild(el);
}

const url = 'https://randomuser.me/api/?results=10';
const ul = document.getElementById('userList');
fetch(url)
  .then((response) => response.json())
  .then(function(data) {
    let userList = data.results;  //Get the results
    return userList.map(    //For each item in userList, run the below function
      function(systemUser) {
        let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
        img.src = systemUser.picture.medium;
        span.innerHTML = `${systemUser.name.first} ${systemUser.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
      }
    )
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });
