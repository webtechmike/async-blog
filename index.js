"use strict";

/**
* View user profile
* Declare rootAPI api
*/

let rootAPI = "https://jsonplaceholder.typicode.com/";

/**
* getUser takes an ID and returns a user
*/​

let getUser = (id) => {
    fetch(rootAPI + `users/${id}`)
        .then((response) => {
            return response;
        });
};

/**
* getPosts takes an userId and returns a user's 5 most recent posts
*/​

let getPosts = (userId) => {
    let posts = [];
    fetch(rootAPI + `posts/${userId}`)
        .then((response) => {
            posts.push(response);
        });
    return posts;
};

/**
* getAlbums takes a userId and returns a user's albums
*/

let getAlbums = (userId) => {
    let albums = [];
    fetch(rootAPI + `albums/${userId}`)
        .then((response) => {
            albums.push(response);
        });
    return albums;
};

/**
* getTodos takes a userId and returns a user's todos
*/

let getTodos = (userId) => {
    let todos = [];
    fetch(rootAPI + `todos/${userId}`)
        .then((response) => {
            todos.push(response);
        });
    return todos;
};

/**
* buildProfile takes a userId and builds a user's profile
*/

let buildProfile = (userId) => {
    let profile = {
        posts: getPosts(userId),
        albums: getAlbums(userId),
        todos: getTodos(userId)
    };
    return profile;
};

buildProfile(1);
