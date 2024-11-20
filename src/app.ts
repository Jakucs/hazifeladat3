import { Rombusz } from './rombusz.js';

class FoAlkalmazas{
    oldalhosszInput: HTMLInputElement;
    alfaszogInput: HTMLInputElement;
    szamitasGomb: HTMLButtonElement;
    outPut: HTMLInputElement;
    rombusz: Rombusz;

    constructor(){
        this.oldalhosszInput = document.querySelector('#length')!;
        this.alfaszogInput = document.querySelector('#angle')!;
        this.outPut = document.querySelector('#h1')!;
        this.szamitasGomb = document.querySelector('#szamitasGomb')!;
        this.rombusz = new Rombusz();
        this.szamitasGomb.addEventListener('click', () => {
            this.szamitas();
        })
    }

    szamitas(): void {
        this.rombusz.setOldalhossz(Number(this.oldalhosszInput.value))
        this.rombusz.setAlfaszog(Number(this.alfaszogInput.value))
        this.rombusz.eredmenySzamitas();
        this.outPut.value = String(this.rombusz.getEredmeny())
        console.log(this.outPut.value)
    }
}



var alkalmazas = new FoAlkalmazas()