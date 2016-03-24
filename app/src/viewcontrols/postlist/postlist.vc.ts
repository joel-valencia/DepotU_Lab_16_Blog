import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/posts/posts.repo';

export default class PostListViewControl extends BaseViewControl {
    templateString: string = require('./postlist.vc.html');

    context: any = {
        posts: []
    };
    
    constructor(private postRepo: PostRepository) {
        super()
        //console.log(this.postRepo.test);
        
        this.postRepo.populatePosts().then((response) => {
            //this.context.posts = response;
            this.context.posts = this.postRepo.posts;
            console.log(this.context.posts);
        })
    }
}

register.viewControl('postlist-vc', PostListViewControl, [PostRepository]);
