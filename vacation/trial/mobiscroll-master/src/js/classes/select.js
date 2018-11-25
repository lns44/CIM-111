import { $ } from '../core/core';
import { Input } from './input';

export class Select extends Input {
    constructor(elm, settings) {
        super(elm, settings);

        const $elm = this._$elm;
        const $parent = this._$parent;
        const $existing = $parent.find('input.mbsc-control');
        const $input = $existing.length ? $existing : $('<input tabindex="-1" class="mbsc-control" readonly>');

        this._$input = $input;
        this._setText = this._setText.bind(this);

        $parent.addClass('mbsc-select' + (this._$frame ? ' mbsc-select-inline' : ''));

        $elm.after($input);

        $input.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');

        // Check if select and mobiscroll select was not initialized
        if (!$elm.hasClass('mbsc-comp')) {
            $elm.on('change', this._setText);
            this._setText();
        }
    }

    destroy() {
        super.destroy();
        this._$parent.find('.mbsc-select-ic').remove();
        this._$elm.off('change', this._setText);
    }

    _setText() {
        const elm = this._elm;
        if (!this._$elm.hasClass('mbsc-comp')) {
            this._$input.val(elm.selectedIndex != -1 ? elm.options[elm.selectedIndex].text : '');
        }
    }
}
