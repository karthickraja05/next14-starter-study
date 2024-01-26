"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./model";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import { createUser, getUserByKey } from "./data";
import bcrypt from "bcryptjs";


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

export const handleLogin = async (formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn('credentials', { username, password });
    } catch (error) {
        console.error('Error during sign-in:', error);
    }
}

export const handleLogout = async () => {
    await signOut();
}

export const handleRegister = async (formData) => {
    const { username, email, password, password_repeat } = Object.fromEntries(formData);

    if (password !== password_repeat) {
        return "Password not match";
    }

    const user = await getUserByKey('email', email);

    if (user) {
        return 'Email already present';
    }

    const user1 = await getUserByKey('username', username);

    if (user1) {
        return 'User Name already present';
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
        username,
        email,
        password: hashedPassword
    };

    try {
        await createUser(newUser);
        return "User created Success";
    } catch (err) {
        return "Somethig went wrong";
    }

}