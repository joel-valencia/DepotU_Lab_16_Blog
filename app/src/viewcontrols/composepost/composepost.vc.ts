import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ComposePostViewControl extends BaseViewControl {
    templateString: string = require('./composepost.vc.html');

    context: any = {};
}

register.viewControl('composepost-vc', ComposePostViewControl);
