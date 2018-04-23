import { Stand } from './stand';

export class Stage {
    public _id: number;
    public name: string;
    public id_country: number;
    public id_league: number;
    public id_season: number;
    public standing: Stand[];
}
