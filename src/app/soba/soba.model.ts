export class Soba{
    naziv: string;
    broj: number;
    opis: string;
    glasovi: number;

    constructor(naziv: string, broj: number, opis: string, glasovi?: number){
        this.naziv = naziv;
        this.broj = broj;
        this.opis = opis;
        this.glasovi = glasovi || 0;
    }
}