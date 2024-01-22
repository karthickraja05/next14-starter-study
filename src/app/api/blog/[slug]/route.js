import { Post } from "@/lib/model";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server"



export const GET = async (request,{params}) => {
    const { slug } = params;
    
    try{
        connectToDb();
        const post = await Post.findOne({slug}).select('title description userId slug userId createdAt');

        // Extract only specific key values
        const { title, content } = post;

        // Create a new object with the desired properties
        const filteredPost = { title, content };

        return NextResponse.json(post);
    }catch(err){
        console.log(err);
        return new Error(err);
    }
    
}