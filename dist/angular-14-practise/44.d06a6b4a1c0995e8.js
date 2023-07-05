"use strict";(self.webpackChunkangular_14_practise=self.webpackChunkangular_14_practise||[]).push([[44],{2044:(b,g,o)=>{o.r(g),o.d(g,{BlogModule:()=>w});var r=o(6895),l=o(529),d=o(8633),c=o(9197),p=o(3518),t=o(4650),s=o(4059),m=o(2088),_=o(5145),h=o(3546),M=o(7392),C=o(1239);function P(n,a){if(1&n&&(t.TgZ(0,"mat-card")(1,"div",3)(2,"div",4),t._UZ(3,"img",5),t.qZA(),t.TgZ(4,"div",6)(5,"h2",7),t._uU(6),t.ALo(7,"titlecase"),t.qZA(),t.TgZ(8,"p",8),t._uU(9),t.qZA(),t.TgZ(10,"a",9),t._uU(11,"Read More"),t.qZA(),t.TgZ(12,"div",10)(13,"p",11)(14,"mat-icon",12),t._uU(15,"access_time"),t.qZA(),t._uU(16," 04 july 2023 "),t.qZA(),t.TgZ(17,"p",11)(18,"mat-icon",12),t._uU(19,"person_outline"),t.qZA(),t._uU(20," Alex Paul "),t.qZA()()()()()),2&n){const e=a.$implicit,i=t.oxw();t.xp6(3),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Q6J("title",e.title),t.xp6(1),t.hij(" ",t.lcZ(7,4,i.formatService.titleFormat(e.title))," "),t.xp6(3),t.hij(" ",e.description," ")}}const O=[{path:"",component:(()=>{class n{constructor(e,i,x){this.dataService=e,this.imageService=i,this.formatService=x,this.heading=p.c.BLOGS,this.blogPosts=[]}ngOnInit(){this.getBlogPosts()}getBlogPosts(){this.dataService.blogs().subscribe(e=>{e.slice(0,15).map(i=>{this.blogPosts.push({title:i.title,description:i.body,image:this.imageService.randomBlogImages()[Math.floor(Math.random()*this.imageService.randomBlogImages().length)]})}),this.description=`Total Blogs : ${this.blogPosts.length}`})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.D),t.Y36(m.A),t.Y36(_.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-blogs"]],decls:3,vars:3,consts:[[3,"heading","description"],[1,"blog-wraper"],[4,"ngFor","ngForOf"],[1,"blog"],[1,"blog__image-wrapper"],[1,"blog__image-wrapper__pic",3,"src"],[1,"card-description"],[1,"card-description__title",3,"title"],[1,"card-description__detail"],[1,"card-description__link"],[1,"card-description__icon-wrapper"],[1,"card-description__icon-wrapper__item"],[1,"card-description__icon-wrapper__item__icon"]],template:function(e,i){1&e&&(t._UZ(0,"app-description-bar",0),t.TgZ(1,"div",1),t.YNc(2,P,21,6,"mat-card",2),t.qZA()),2&e&&(t.Q6J("heading",i.heading)("description",i.description),t.xp6(2),t.Q6J("ngForOf",i.blogPosts))},dependencies:[r.sg,h.a8,M.Hw,C.S,r.rS],styles:[".blog-wraper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:auto;grid-gap:20px}@media screen and (max-width: 586px){.blog-wraper[_ngcontent-%COMP%]{grid-template-columns:100%}}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{background:#FFFFFF;margin-bottom:0;padding-top:15px;height:340px}@media screen and (max-width: 1024px){.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{height:auto}}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]{display:grid;grid-template-columns:48% auto;grid-gap:20px;grid-template-rows:auto;height:100%;width:100%}@media screen and (max-width: 1024px){.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]{width:100%;grid-template-columns:100%}}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog__image-wrapper[_ngcontent-%COMP%]{width:auto;height:100%;padding:0 0 0 15px}@media screen and (max-width: 1200px){.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog__image-wrapper[_ngcontent-%COMP%]{padding:0 15px}}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog__image-wrapper__pic[_ngcontent-%COMP%]{height:100%;width:100%}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%]{padding:0 15px 0 0}@media screen and (max-width: 1200px){.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%]{padding:0 15px}}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .card-description__title[_ngcontent-%COMP%]{font-weight:700;font-size:35px;line-height:43px;display:flex;align-items:center;color:#000;margin:0 0 13px;overflow:hidden;text-overflow:ellipsis;height:100px}@media screen and (max-width: 1024px){.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .card-description__title[_ngcontent-%COMP%]{height:50px}}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .card-description__detail[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:19px;text-align:justify;color:#668094;height:150px;overflow:hidden;text-overflow:ellipsis}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .card-description__link[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:19px;text-decoration-line:underline;color:#47a1f6}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .card-description__icon-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:20px}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .card-description__icon-wrapper__item[_ngcontent-%COMP%]{margin:0;display:flex;align-items:center;color:#000}.blog-wraper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .card-description__icon-wrapper__icon[_ngcontent-%COMP%]{margin-left:10px;color:#000}.content-wraper[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;grid-gap:20px}"]}),n})()},{path:"",redirectTo:"",pathMatch:"full"},{path:"**",redirectTo:""}];let u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(O),c.Bz]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,l.JF,u,d.m]}),n})()}}]);