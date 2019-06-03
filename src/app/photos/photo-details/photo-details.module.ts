import { NgModule } from "@angular/core";
import { PhotoDetailComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponents } from "./photo-comments/photo-comments.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";

@NgModule({
    declarations: [
        PhotoDetailComponent, PhotoCommentsComponents
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
        VMessageModule
    ]
})
export class PhotoDetailsModule {
    
}