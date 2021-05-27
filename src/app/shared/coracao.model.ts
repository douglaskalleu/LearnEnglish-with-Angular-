export class Coracao{
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png'
    ){}

    public ExiberCoracao(): string{
        var retorno = this.urlCoracaoVazio;
        
        if(this.cheio){
            retorno = this.urlCoracaoCheio;
        }
        return retorno;
    }
}