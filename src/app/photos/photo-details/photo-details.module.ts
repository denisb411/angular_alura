import { NgModule } from "@angular/core";
import { PhotoDetailComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponents } from "./photo-comments/photo-comments.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [
        PhotoDetailComponent, 
        PhotoCommentsComponents,
        PhotoOwnerOnlyDirective
    ],
    exports: [
        PhotoDetailComponent,
        PhotoCommentsComponents
    ],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        ShowIfLoggedModule
    ]
})
export class PhotoDetailsModule {
    
}