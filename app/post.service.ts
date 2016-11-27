import { Injectable } from '@angular/core';
import {POSTS} from './mock-postlist';
import {Post} from './post';


@Injectable()
export class PostService {
    getAllPosts():Promise<Post[]>{
        return Promise.resolve(POSTS);
    }

    filterPostsById(posts:Post[], id:string) :Promise<Post>{
        let filtered =  posts.find((post)=> post.postId === id);
        return Promise.resolve(filtered);
    }
    getPostById(id:string){
        // replace with api call
        return this.filterPostsById(POSTS, id);
    }

}