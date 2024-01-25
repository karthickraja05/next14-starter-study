"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./model";
import { connectToDb } from "./utils";
import { auth, signIn, signOut } from "./auth";
import { createUser, getUserByKey } from "./data";


export const sayHello = async () => {

    console.log('Hello');
}

export const addPost = async (formData) => {
    const {
        title,
        description,
        img,
        slug,
        userId
    } = Object.fromEntries(formData);

    try {
        connectToDb();
        const post = await new Post({
            title,
            description,
            img,
            slug,
            userId
        });

        await post.save();
        console.log('Post Saved to DB');
        revalidatePath('/blog');
    } catch (err) {
        console.log(err);
        throw new Error('Failed to add fetch');
    }
}

export const deletePost = async (id) => {
    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log('Post Deleted Successfully');
        revalidatePath('/blog');
    } catch (err) {
        console.log(err);
        throw new Error('Failed to delete fetch');
    }
}


export const handleGithubLogin = async () => {
    await signIn("github");
}

export const handleLogout = async () => {
    await signOut();
}

export const handleRegister = async (formData) => {
    const { username , email, password, password_repeat } = Object.fromEntries(formData);

    if(password !== password_repeat){
        return "Password not match";
    }

    const user = await getUserByKey('email',email);
    
    if(user){
        return 'Email already present';
    }
    
    const user1 = await getUserByKey('username',username);

    if(user1){
        return 'User Name already present';
    }

    const newUser = {
        username,
        email,
        password
    };
    try{
        await createUser(newUser);
        return "User created Success";
    }catch(err){
        return "Somethig went wrong";
    }

}