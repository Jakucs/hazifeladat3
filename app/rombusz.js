export class Rombusz {
    constructor() {
        this.oldalhossz = 0;
        this.alfaszog = 0;
        this.vegeredmeny = 0;
    }
    eredmenySzamitas() {
        var alfaSzogRadianja = this.alfaszog * (Math.PI / 180);
        var alfaSzogSzinusza = Math.sin(alfaSzogRadianja);
        this.vegeredmeny = (1 / 2) * (this.oldalhossz * alfaSzogSzinusza);
    }
    getEredmeny() {
        return this.vegeredmeny;
    }
    setOldalhossz(oldalhossz) {
        this.oldalhossz = oldalhossz;
    }
    setAlfaszog(alfaszog) {
        this.alfaszog = alfaszog;
    }
}
