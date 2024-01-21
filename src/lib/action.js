"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./model";
import { connectToDb } from "./utils";


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