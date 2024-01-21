// Temporary Data

import { Post, User } from "./model";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

const quotes = [
    "The only way to do great work is to love what you do.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
];



export const randomQuotes = async () => {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    return randomQuote;
}


export const getPosts = async () => {
    noStore();
    try{
        connectToDb();
        const posts = await Post.find();
        return posts;
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch posts');
    }
}

export const getPost = async (slug) => {
    noStore();
    try{
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch post');
    }
}

export const getUsers = async (slug) => {
    noStore();
    try{
        connectToDb();
        const users = await User.find();
        return users;
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch users');
    }
}

export const getUser = async (id) => {
    noStore();
    try{
        connectToDb();
        const user = await User.findById(id);
        return user;
    }catch(err){
        console.log(err);
        throw new Error('Failed to fetch user');
    }
}