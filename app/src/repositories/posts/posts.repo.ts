import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import APIService from '../../services/api/api.svc';

export default class PostsRepository extends BaseRepository {
    posts: any = [];
    test: any = "works";
    post: any = {};
    
    constructor(private apiSvc: APIService) {
        super();
    }
    
    populatePosts() {
        return this.apiSvc.getAllPosts().then((response) => {
            this.posts = response;
            return response;
        });
    }
    
    populateSinglePost(id:string) {
        return this.apiSvc.getSinglePost(id).then((response) => {
            this.post = response;
            return response;
        });
    }
    
    addPost(post:{}) {
        return this.apiSvc.createPost(post).then((response) => {
            this.post = response;
            return response;
        });
    }
}

register.injectable('posts-repo', PostsRepository, [APIService]);
