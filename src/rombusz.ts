export class Rombusz{
    private oldalhossz: number;
    private alfaszog: number;
    private vegeredmeny: number;

    constructor(){
        this.oldalhossz = 0;
        this.alfaszog = 0;
        this.vegeredmeny = 0;
    }

    eredmenySzamitas(){
        var alfaSzogRadianja = this.alfaszog * (Math.PI / 180)
        var alfaSzogSzinusza = Math.sin(alfaSzogRadianja)
        this.vegeredmeny = (1/2)*(this.oldalhossz*alfaSzogSzinusza)
    }

    getEredmeny(): number {
        return this.vegeredmeny
    }

    setOldalhossz(oldalhossz: number): void {
        this.oldalhossz = oldalhossz
    }

    setAlfaszog(alfaszog: number): void{
        this.alfaszog = alfaszog
    }
}