import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/posts/posts.repo';

export default class PostListViewControl extends BaseViewControl {
    templateString: string = require('./postlist.vc.html');

    context: any = {
        posts: [],
        postTemp: []
    };
    
    constructor(private postRepo: PostRepository) {
        super()
        
        this.postRepo.populatePosts().then((response) => {
            // reverse sort posts
            this.context.postTemp = this.postRepo.posts.reverse();
            
            // make date and time friendly
            
            
            this.context.posts = this.context.postTemp;
        })
    }
}

register.viewControl('postlist-vc', PostListViewControl, [PostRepository]);
