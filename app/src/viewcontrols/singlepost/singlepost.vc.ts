import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/posts/posts.repo';

export default class SinglePostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context: any = {
        post: {}
    };
    
    navigatedTo(params:any) {
        let id:any = params.id;
        
        //console.log(id);
        this.context.id = id;
        console.log(this.context.id);
        
        this.postRepo.populateSinglePost(this.context.id).then((response) => {
            //this.context.posts = response;
            this.context.post = this.postRepo.post;
            console.log(this.context.post);
        })
    }
    
    constructor(private postRepo: PostRepository) {
        super()
        
        //console.log(this.context.id);
        
        // this.postRepo.populateSinglePost(this.context.id).then((response) => {
        //     //this.context.posts = response;
        //     console.log(response);
        //     this.context.post = this.postRepo.post;
        //     //console.log(this.context.post);
        // })
    }
}

register.viewControl('singlepost-vc', SinglePostViewControl, [PostRepository]);
