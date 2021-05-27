import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Phrase } from '../shared/frases.model';
import { PHRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {

  public phrase: Phrase[] = PHRASES;
  public instrucao: string = 'Traduza a frase';
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase!: Phrase;
  public progresso: number = 0;
  public tentativas: number = 3;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter;

  constructor() {
    this.AtualizarRodada();
  }

  ngOnInit(): void {
  }

  public atualizarResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void{

    if(this.rodadaFrase.phrasePt == this.resposta){
      this.progresso = this.progresso + (100 / this.phrase.length);
      this.rodada++;
      this.VerificaTotalRodadas();
      this.AtualizarRodada();      
    }
    else{
      this.tentativas--;
      this.ExisteTentativas();
    }
  }

  private VerificaTotalRodadas() {
    if (this.rodada === 4){
      this.encerrarJogo.emit('Vitória');
    }
  }

  private ExisteTentativas() {
    if (this.tentativas === -1){
      this.encerrarJogo.emit('Derrota');
    }
  }

  private AtualizarRodada(): void{
    this.rodadaFrase = this.phrase[this.rodada];
    this.resposta = '';
  }
}
