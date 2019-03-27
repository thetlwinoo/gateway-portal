import { Moment } from 'moment';

export interface IColors {
    id?: number;
    colorName?: string;
    validFrom?: Moment;
    validTo?: Moment;
}

export class Colors implements IColors {
    constructor(public id?: number, public colorName?: string, public validFrom?: Moment, public validTo?: Moment) {}
}
