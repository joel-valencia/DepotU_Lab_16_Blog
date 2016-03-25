import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/posts/posts.repo';

export default class ComposePostViewControl extends BaseViewControl {
    templateString: string = require('./composepost.vc.html');

    context: any = {
        post: {},
        result: ""
    };
    
    constructor(private postRepo: PostRepository) {
        super()
    }
    
    send() {
        this.postRepo.addPost(this.context.post).then((response) => {
            this.context.result = "Posted!"
        })
    }
}

register.viewControl('composepost-vc', ComposePostViewControl, [PostRepository]);
