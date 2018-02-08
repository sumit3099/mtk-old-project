import { Component, OnInit } from '@angular/core';

// import { FormGroup, FormBuilder,Validators } from '@angular/forms';
// import { states } from '../data-model';
// import { PostsService } from '../posts.service';
// import { Calendar, DataTable, Column, InputMask } from 'primeng/primeng';
// import { Http } from '@angular/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {
   p: number = 1;
    collection: any[];
     
//   heroForm: FormGroup;
//  states=states;
  constructor() {

    // this.createForm();
   }



//    createForm() {
//     this.heroForm = this.fb.group({
//       name:['', Validators.required ], 
//       street: ['', Validators.required ], 
//       city: '',
//       state: '',
//       zip: ['', Validators.required ], 
//       power: '',
//       sidekick: '',// <--- the FormControl called "name"
//     });
//   }
// // posts: any = [];
//   images: any[];
    ngOnInit() {
      this. collection=[6,20,30,8,9,5,3,5,7,8,5,3,6,8,5,3,6,8,4,3,6,884,4,64,6,4,65,87];
//  let url = '/api/posts';
// this.http.post(url, {moo:"foo",goo:"loo"});
//  this.postsService.getAllPosts().subscribe(posts => {
//       this.posts = posts;
//       console.log(posts);
 
//   });

// this.http.post('/api/posts',{ title1 : 'foo',
//       body: 'bar',
//       userId: 1
//     }).subscribe();

//         this.images = [];
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria1.jpg', alt:'Description for Image 1', title:'Title 1'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria2.jpg', alt:'Description for Image 2', title:'Title 2'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria3.jpg', alt:'Description for Image 3', title:'Title 3'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria4.jpg', alt:'Description for Image 4', title:'Title 4'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria5.jpg', alt:'Description for Image 5', title:'Title 5'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria6.jpg', alt:'Description for Image 6', title:'Title 6'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria7.jpg', alt:'Description for Image 7', title:'Title 7'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria8.jpg', alt:'Description for Image 8', title:'Title 8'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria9.jpg', alt:'Description for Image 9', title:'Title 9'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria10.jpg', alt:'Description for Image 10', title:'Title 10'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria11.jpg', alt:'Description for Image 11', title:'Title 11'});
//         this.images.push({source:'assets/showcase/images/demo/galleria/galleria12.jpg', alt:'Description for Image 12', title:'Title 12'});
    }

}
