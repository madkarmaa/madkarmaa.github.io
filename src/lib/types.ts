export enum FAIconType {
    SOLID = 'solid',
    REGULAR = 'regular',
    LIGHT = 'light',
    DUOTONE = 'duotone',
    THIN = 'thin',
}

export interface Step {
    title: string;
    description: string;
    media_path?: string;
}

export interface XManagerAPKVersion {
    Link_1: string;
    Link_2: string;
    Mirror: string;
    Title: string;
}
