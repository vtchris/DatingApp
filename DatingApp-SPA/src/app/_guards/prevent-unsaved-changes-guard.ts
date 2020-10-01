import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { MemberEditComponent } from './../members/member-edit/member-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
    canDeactivate(component: MemberEditComponent) {
        if (component.editForm.dirty) {
            return confirm('You have unsaved changes that may be lost. Are you sure you want to continue?');
        }
        return true;
    }
}