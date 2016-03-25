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
        
        this.postRepo.populatePosts().then((response) => {
            let postsTemp:Array<{}> = [];
            
            // reverse sort posts
            postsTemp = this.postRepo.posts.reverse();
            
            // make date and time friendly
            // for (let i = 0; i < postsTemp.length; i++) {
            //     var tempDate = new Date(postsTemp[i].createdAt);
            //     console.log(tempDate);
            //     postsTemp[i].createdAt = tempDate;
            // }

            // put in context
            this.context.posts = postsTemp;
        })
    }
}

register.viewControl('postlist-vc', PostListViewControl, [PostRepository]);
