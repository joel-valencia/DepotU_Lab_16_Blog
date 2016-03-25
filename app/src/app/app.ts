import {App, events, register, routing, web} from 'platypus';
// import HomeViewControl from '../viewcontrols/home/home.vc';
import PostListViewControl from '../viewcontrols/postlist/postlist.vc';
import SinglePostViewControl from '../viewcontrols/singlepost/singlepost.vc';
import ComposePostViewControl from '../viewcontrols/composepost/composepost.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: PostListViewControl },
            { pattern: 'blog/:id', view: SinglePostViewControl },
            { pattern: 'compose/', view: ComposePostViewControl },
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
