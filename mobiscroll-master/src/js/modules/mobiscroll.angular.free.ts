import { NgModule, FormsModule, CommonModule, mobiscroll } from '../frameworks/angular';

import { MbscForm, MbscRating, MbscInput, MbscDropdown, MbscTextarea, MbscButton, MbscCheckbox, MbscSwitch, MbscStepper, MbscProgress, MbscSlider, MbscRadio, MbscRadioGroup, MbscSegmentedGroup, MbscSegmented, MbscFormOptions, MbscFormGroup, MbscFormGroupTitle, MbscFormGroupContent } from '../forms.angular';
import { MbscPage, MbscPageOptions, MbscNote, MbscAvatar } from '../page.angular';
import { MbscCommercialComponent } from '../mobiscroll.commercial';

const directives = [
    MbscForm, MbscRating, MbscPage, MbscNote, MbscAvatar, MbscInput, MbscDropdown, MbscTextarea, MbscButton, MbscCheckbox, MbscSwitch, MbscStepper, MbscProgress, MbscSlider, MbscRadio, MbscRadioGroup, MbscSegmentedGroup, MbscSegmented,
    MbscCommercialComponent, MbscFormGroup, MbscFormGroupTitle, MbscFormGroupContent
];

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [directives],
    exports: [directives]
})
class MbscModule { };

export {
    mobiscroll,
    MbscForm, MbscRating, MbscPage, MbscNote, MbscAvatar, MbscInput, MbscDropdown, MbscTextarea, MbscButton, MbscCheckbox, MbscSwitch, MbscStepper, MbscProgress, MbscSlider, MbscRadio, MbscRadioGroup, MbscSegmentedGroup, MbscSegmented,
    MbscCommercialComponent,
    MbscPageOptions,
    MbscModule
}