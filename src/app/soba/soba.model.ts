export class Soba{
    naziv: string;
    broj: number;
    link: string;
    opis: string;
    glasovi: number;

    constructor(naziv: string, broj: number, link: string, opis: string, glasovi?: number){
        this.naziv = naziv;
        this.broj = broj;
        this.link = link;
        this.opis = opis;
        this.glasovi = glasovi || 0;
    }

    voteUp(): void{
        this.glasovi += 1;
    }

    voteDown(): void{
        this.glasovi -= 1;
    }

    domain(): string | null{
        try{
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err){
            console.log(err);
            return null;
        }
    }
}