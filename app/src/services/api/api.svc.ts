import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class APIService extends BaseService {
    getAllPosts():async.IThenable<models.IBlank> {
        return this.http.json({
            method: 'GET',
            url: this.host + '/posts',
        }).then(
            (success) => {
                //console.log(success);
                return success.response;
            },
            (error): any => {
                throw error.response.message;
            }
        );
    }
    
    getSinglePost(id:any):async.IThenable<models.IBlank> {
        console.log(id);
        return this.http.json({
            method: 'GET',
            url: this.host + '/posts/' + id,
        }).then(
            (success) => {
                //console.log(success);
                return success.response;
            },
            (error): any => {
                throw error.response.message;
            }
        );
    }
    
    createPost(post:{}):async.IThenable<models.IBlank> {
        return this.http.json({
            method: 'POST',
            url: this.host + '/posts/',
            data: post
        }).then(
            (success) => {
                return success;
            },
            (error): any => {
                throw error.response.message;
            }
        );
    }
}

register.injectable('api-svc', APIService);
