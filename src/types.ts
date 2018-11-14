export class Member {
    id = 0;
    firstName = '';
    lastName = '';
    dateOfBirth: Date = new Date();
    image?: string;
    memberFrom?: Date;
    gender: Gender = Gender.Female;
    address?: string;
    contactPhone?: string;
    fatherId?: number;
    fatherFirstName?: string;
    fatherLastName?: string;
    fatherContactPhone?: string;
    motherId?: number;
    motherFirstName?: string;
    motherLastName?: string;
    motherContactPhone?: string;
}

export enum Gender {
    Male = 1,
    Female = 2
}