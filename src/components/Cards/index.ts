import { GlobalTypes } from '../../globals/index';

export interface CardTypes extends GlobalTypes {
    artPrice: string | undefined,
    src?: string,
    title: string | undefined,
    subTitle: string | undefined,
    alt?: string | undefined,
}