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
    image_path?: string;
}
