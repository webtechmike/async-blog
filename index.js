"use strict";

/**
 * View user profile
 * Declare rootAPI api
 */

let rootAPI = "https://jsonplaceholder.typicode.com/";

/**
 * getUsers returns all users
 */

function getUsers() {
    return fetch(rootAPI + `users`)
        .then((response) => {
            return response;
        }, (err) => {
            console.log("Error:", err);
            throw err;
        });
}


/**
 * getUser takes an ID and returns a user
 * @param {number} userId - The ID of the user.
 */

function getUser(userId) {
    return fetch(rootAPI + `users/${id}`)
        .then((response) => {
            return response;
        });
}


/**
 * getPosts takes an userId and returns a user's 5 most recent posts
 * @param {number} userId - The ID of the user.
 */

function getPosts(userId) {
    let posts = [];
    fetch(`${rootAPI}posts/${userId}`)
        .then((response) => {
            posts.push(response);
        });
    return posts;
}


/**
 * viewPost takes a postId and returns title, and body
 * @param {number} postId - The ID of the post.
 */

function viewPost(postId) {
    return fetch(`${rootAPI}posts/${postId}`)
        .then((response) => {
            return response;
        });
}


/**
 * viewComments takes a postId and returns that posts comments
 * @param {number} postId - The ID of the post.
 */

function viewComments(postId) {
    return fetch(`${rootAPI}posts/${postId}/comments`)
        .then((response) => {
            return response;
        });
}


/**
 * getAlbums takes a userId and returns a user's albums
 * @param {number} userId - The ID of the user.
 */

function getAlbums(userId) {
    let albums = [];
    fetch(`${rootAPI}albums/${userId}`)
        .then((response) => {
            albums.push(response);
        });
    return albums;
}


/**
 * getTodos takes a userId and returns a user's todos
 * @param {number} userId - The ID of the user.
 */

function getTodos(userId) {
    let todos = [];
    fetch(rootAPI + `todos/${userId}`)
        .then((response) => {
            todos.push(response);
        });
    return todos;
}


/**
 * buildProfile takes a userId and builds a user's profile
 * @param {number} userId - The ID of the user.
 */

function buildProfile(userId) {
    let profile = {
        posts: getPosts(userId),
        albums: getAlbums(userId),
        todos: getTodos(userId)
    };
    return profile;
}

let users = getUsers();
console.log(users);


/**
 * click user with ID 1
 */

console.log( "Build Profile:", buildProfile(1) );
console.log( viewPost(5) );
console.log( viewComments(5) );
