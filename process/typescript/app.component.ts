import {Component} from 'angular2/core';
import {PostListComponent} from './post-list.comp';
import {PostItemComponent} from './post-item.comp';
import {PostDetailComponent} from './post-detail.comp';
import {RouteConfig} from 'angular2/router';
import {PostService} from './PostService';



@RouteConfig([
	{path: '/',            component: AppComponent },
	{path: '/details/:id', component: PostDetailComponent}])

@Component({
  selector: 'daln-app',
  templateUrl: 'templates/home.html',
  directives: [PostItemComponent]
})

	
export class AppComponent {

constructor(private _postService: PostService){}

ngOnInit() {
	  this.postList = this._postService.getAllPosts();
		console.log("app.com postList: ", this.postList);
        // this._postService.getAllPosts().subscribe((data)=>{
		// 	this.postList = data;
		// 	console.log("app.com postList: ", this.postList);
		// });
		
    }

  
  

// this._postService.getAllPosts().subscribe(
//       // the first argument is a function which runs on success
//       data => { this.postList = data},
//       // the second argument is a function which runs on error
//       err => console.error(err),
//       // the third argument is a function which runs on completion
//       () => console.log('done loading posts')
//     );
  
    
}