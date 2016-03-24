import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class SinglePostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context: any = {};
}

register.viewControl('singlepost-vc', SinglePostViewControl);
