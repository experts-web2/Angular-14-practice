"use strict";(self.webpackChunkangular_14_practise=self.webpackChunkangular_14_practise||[]).push([[366],{7366:(j,p,s)=>{s.r(p),s.d(p,{UserModule:()=>R});var c=s(6895),_=s(529),h=s(8633),u=s(9197),r=s(3626),d=s(3518),t=s(4650),f=s(4059),C=s(2088),m=s(3546),g=s(7392),U=s(4144),v=s(1239);function Z(e,a){1&e&&(t.TgZ(0,"p")(1,"b"),t._uU(2,"No User Found"),t.qZA()())}function x(e,a){if(1&e&&(t.TgZ(0,"mat-card",4)(1,"div",5),t._UZ(2,"img",6),t.qZA(),t.TgZ(3,"div",7)(4,"mat-icon",8),t._uU(5,"send"),t.qZA()(),t.TgZ(6,"h2",9),t._uU(7),t.ALo(8,"titlecase"),t.qZA(),t.TgZ(9,"p",10),t._uU(10),t.ALo(11,"titlecase"),t.qZA()()),2&e){const n=a.$implicit;t.xp6(2),t.Q6J("src",n.image,t.LSH),t.xp6(5),t.Oqu(t.lcZ(8,3,n.name)),t.xp6(3),t.Oqu(t.lcZ(11,5,n.designation))}}function M(e,a){if(1&e&&(t.TgZ(0,"div",2),t.YNc(1,x,12,7,"mat-card",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.users)}}let T=(()=>{class e{constructor(){this.users=[]}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-avatar"]],inputs:{users:"users"},decls:2,vars:2,consts:[[4,"ngIf"],["class","main-wraper",4,"ngIf"],[1,"main-wraper"],["class","user-card",4,"ngFor","ngForOf"],[1,"user-card"],[1,"circle"],["onerror","this.src='./assets/images/default_user.png'",1,"circle__img",3,"src"],[1,"paper"],[1,"paper__icon"],[1,"user-card__title"],[1,"user-card__detail"]],template:function(n,o){1&n&&(t.YNc(0,Z,3,0,"p",0),t.YNc(1,M,2,1,"div",1)),2&n&&(t.Q6J("ngIf",!o.users.length),t.xp6(1),t.Q6J("ngIf",null==o.users?null:o.users.length))},dependencies:[m.a8,g.Hw,c.sg,c.O5,c.rS]}),e})();function O(e,a){if(1&e&&t._UZ(0,"app-user-avatar",4),2&e){const n=t.oxw();t.Q6J("users",n.users)}}function w(e,a){if(1&e&&(t.TgZ(0,"option",22),t._uU(1),t.qZA()),2&e){const n=a.index;t.s9C("value",n+1),t.xp6(1),t.hij(" ",n+1," ")}}function A(e,a){1&e&&t._UZ(0,"th",23)}function b(e,a){if(1&e&&(t.TgZ(0,"td",24),t._UZ(1,"img",25),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Q6J("src",n.image,t.LSH)}}function P(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Name"),t.qZA())}function y(e,a){if(1&e&&(t.TgZ(0,"td",24)(1,"span"),t._uU(2),t.qZA()()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.name,"")}}function F(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Designation"),t.qZA())}function N(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.designation)}}function J(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Joining Date"),t.qZA())}function S(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.joining_date)}}function Q(e,a){1&e&&t._UZ(0,"tr",26)}function Y(e,a){1&e&&t._UZ(0,"tr",27)}function D(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-card",5)(1,"mat-card-header")(2,"mat-card-title")(3,"div",6),t._uU(4," Show "),t.TgZ(5,"select",7),t.NdJ("change",function(i){t.CHM(n);const l=t.oxw();return t.KtG(l.showEntries(i))}),t.TgZ(6,"option",8),t._uU(7,"All"),t.qZA(),t.YNc(8,w,2,2,"option",9),t.qZA(),t._uU(9," Enteries "),t.qZA(),t.TgZ(10,"div",10)(11,"mat-icon"),t._uU(12,"search"),t.qZA(),t.TgZ(13,"input",11),t.NdJ("keyup",function(i){t.CHM(n);const l=t.oxw();return t.KtG(l.search(i))}),t.qZA()()()(),t.TgZ(14,"div",12)(15,"table",13),t.ynx(16,14),t.YNc(17,A,1,0,"th",15),t.YNc(18,b,2,1,"td",16),t.BQk(),t.ynx(19,17),t.YNc(20,P,2,0,"th",15),t.YNc(21,y,3,1,"td",16),t.BQk(),t.ynx(22,18),t.YNc(23,F,2,0,"th",15),t.YNc(24,N,2,1,"td",16),t.BQk(),t.ynx(25,19),t.YNc(26,J,2,0,"th",15),t.YNc(27,S,2,1,"td",16),t.BQk(),t.YNc(28,Q,1,0,"tr",20),t.YNc(29,Y,1,0,"tr",21),t.qZA()()()}if(2&e){const n=t.oxw();t.xp6(8),t.Q6J("ngForOf",n.filterEnterties(n.filteredUsers.length)),t.xp6(7),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns)}}function L(e,a){1&e&&(t.TgZ(0,"p")(1,"b"),t._uU(2,"No User Record Found"),t.qZA()())}const I=[{path:"",component:(()=>{class e{constructor(n,o){this.dataService=n,this.imageService=o,this.displayedColumns=["image","name","designation","joining_date"],this.users=[],this.filteredUsers=[],this.appConstants=d.c,this.selectedView=d.c.CARD,this.heading=d.c.USERS}ngOnInit(){this.getUsers()}getUsers(){this.users=[],this.dataService.users().subscribe(n=>{n.forEach(o=>{this.users.push({email:o.email,image:this.imageService.randomUsersAvatar()[Math.floor(Math.random()*this.imageService.randomUsersAvatar().length)],name:o.name,website:o.website,designation:"consectetur adipiscing",joining_date:"5 July 2023"})}),this.filteredUsers=this.users,this.dataSource=new r.by(this.users),this.description=`Total ${this.users.length} ${this.users.length>1?"users":"user"}`})}search(n){const o=n.target.value.toLocaleLowerCase();this.users=this.filteredUsers.filter(i=>i.email.toLocaleLowerCase().match(o)||i.website.toLocaleLowerCase().match(o)||i.name.toLocaleLowerCase().match(o)),this.dataSource=new r.by(this.users)}showEntries(n){this.users=[];const o=n.target?.value;o===d.c.ALL?this.getUsers():(this.users=this.filteredUsers.slice(0,Number(o)),this.dataSource=new r.by(this.users))}changeGridView(n){this.selectedView=n}filterEnterties(n){return new Array(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.D),t.Y36(C.A))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-users"]],decls:4,vars:5,consts:[[3,"heading","description","onModeChange"],[3,"users",4,"ngIf"],["class","table-card",4,"ngIf"],[4,"ngIf"],[3,"users"],[1,"table-card"],[1,"table-card__select"],[1,"table-card__select__field",3,"change"],["value","All"],[3,"value",4,"ngFor","ngForOf"],[1,"table-card__search"],["placeholder","Search Entry","matInput","",1,"table-card__search__field",3,"keyup"],[1,"table-scroll"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","image"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","designation"],["matColumnDef","joining_date"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["height","40",1,"user-profile-pic",3,"src"],["mat-header-row",""],["mat-row",""]],template:function(n,o){1&n&&(t.TgZ(0,"app-description-bar",0),t.NdJ("onModeChange",function(l){return o.changeGridView(l)}),t.qZA(),t.YNc(1,O,1,1,"app-user-avatar",1),t.YNc(2,D,30,4,"mat-card",2),t.YNc(3,L,3,0,"p",3)),2&n&&(t.Q6J("heading",o.heading)("description",o.description),t.xp6(1),t.Q6J("ngIf",o.selectedView===o.appConstants.CARD&&o.users.length),t.xp6(1),t.Q6J("ngIf",o.selectedView===o.appConstants.LIST),t.xp6(1),t.Q6J("ngIf",!o.users.length))},dependencies:[m.a8,m.dk,m.n5,g.Hw,U.Nt,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,c.sg,c.O5,v.S,T],styles:["table[_ngcontent-%COMP%]{width:100%;font-weight:400;font-size:16px;line-height:19px;color:#668094}table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{border-top:1px solid #e1edf1;height:40px;font-weight:700;font-size:18px;line-height:22px;color:#668094}table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td.mat-footer-cell[_ngcontent-%COMP%]{border-color:#fff}table[_ngcontent-%COMP%]   .user-profile-pic[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;border:3px solid #47A1F6;margin:16px 0;display:block}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#FFFFFF!important;color:#668094;border-top:1px solid #f0f5fb;border-bottom:1px solid #f0f5fb;font-weight:600;font-size:18px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td.mat-cell[_ngcontent-%COMP%]{background:#f0f5fb!important;color:#668094}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td.mat-cell[_ngcontent-%COMP%]:nth-child(2){color:#47a1f6;font-weight:600}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td.mat-cell[_ngcontent-%COMP%]{color:#668094;background:#FFFFFF!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td.mat-cell[_ngcontent-%COMP%]:nth-child(2){color:#47a1f6;font-weight:600}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-weight:700;font-size:18px;line-height:22px;display:flex;align-items:center;color:#47a1f6}.table-scroll[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto}@media screen and (max-width: 586px){.table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:600px}}"]}),e})()},{path:"",redirectTo:"",pathMatch:"full"},{path:"**",redirectTo:""}];let q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(I),u.Bz]}),e})(),R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[q,_.JF,h.m,c.ez]}),e})()}}]);