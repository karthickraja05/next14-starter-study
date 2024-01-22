import { Post } from "@/lib/model";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server"



export const GET = async (request) => {
    
    try{
        connectToDb();
        const posts = await Post.find().select('title description userId slug userId createdAt');
        return NextResponse.json(posts);
    }catch(err){
        console.log(err);
        return new Error(err);
    }
    
}