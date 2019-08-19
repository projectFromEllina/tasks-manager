import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        LoaderComponent
    ],
    declarations: [
        NotFoundComponent,
        LoaderComponent
    ]
})
export class SharedModule {}