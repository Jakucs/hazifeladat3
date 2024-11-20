import { Rombusz } from './rombusz.js';
class FoAlkalmazas {
    constructor() {
        this.oldalhosszInput = document.querySelector('#length');
        this.alfaszogInput = document.querySelector('#angle');
        this.outPut = document.querySelector('#h1');
        this.szamitasGomb = document.querySelector('#szamitasGomb');
        this.rombusz = new Rombusz();
        this.szamitasGomb.addEventListener('click', () => {
            this.szamitas();
        });
    }
    szamitas() {
        this.rombusz.setOldalhossz(Number(this.oldalhosszInput.value));
        this.rombusz.setAlfaszog(Number(this.alfaszogInput.value));
        this.rombusz.eredmenySzamitas();
        this.outPut.value = String(this.rombusz.getEredmeny());
        console.log(this.outPut.value);
    }
}
var alkalmazas = new FoAlkalmazas();
