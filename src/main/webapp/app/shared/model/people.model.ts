import { Moment } from 'moment';

export interface IPeople {
    id?: number;
    fullName?: string;
    preferredName?: string;
    searchName?: string;
    isPermittedToLogon?: boolean;
    logonName?: string;
    isExternalLogonProvider?: boolean;
    hashedPassword?: string;
    isSystemUser?: boolean;
    isEmployee?: boolean;
    isSalesPerson?: boolean;
    userPreferences?: string;
    phoneNumber?: string;
    faxNumber?: string;
    emailAddress?: string;
    photo?: string;
    customFields?: string;
    otherLanguages?: string;
    validFrom?: Moment;
    validTo?: Moment;
}

export class People implements IPeople {
    constructor(
        public id?: number,
        public fullName?: string,
        public preferredName?: string,
        public searchName?: string,
        public isPermittedToLogon?: boolean,
        public logonName?: string,
        public isExternalLogonProvider?: boolean,
        public hashedPassword?: string,
        public isSystemUser?: boolean,
        public isEmployee?: boolean,
        public isSalesPerson?: boolean,
        public userPreferences?: string,
        public phoneNumber?: string,
        public faxNumber?: string,
        public emailAddress?: string,
        public photo?: string,
        public customFields?: string,
        public otherLanguages?: string,
        public validFrom?: Moment,
        public validTo?: Moment
    ) {
        this.isPermittedToLogon = this.isPermittedToLogon || false;
        this.isExternalLogonProvider = this.isExternalLogonProvider || false;
        this.isSystemUser = this.isSystemUser || false;
        this.isEmployee = this.isEmployee || false;
        this.isSalesPerson = this.isSalesPerson || false;
    }
}
