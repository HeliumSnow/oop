function aluno(nomecomp, alturaTamanho, discFav, comFav, equipaFavorita, dataNasc){
		this.nome = nomecomp;
		this.altura = alturaTamanho;
		this.disciplina = discFav;
		this.comida = comFav;
		this.equipa = equipaFavorita;
		this.data = dataNasc;
		this.saudacao = function(){	
			console.log("Olá, meu nome é " + this.nome + ", tenho " + this.altura + " metros de altura, minha disciplina favorita é " + this.disciplina + ", minha comida favorita é " + this.comida + ", minha equipa favorita é o " + this.equipa + " e nasci no dia " +this.data)
		}
}

var andre = new aluno("André Costa", "2,00", "química", "couve bruxelas", "Benfica", "05/04/2000")
	andre.saudacao();
	
var antonio = new aluno("António Lourenço", "1,50", "alemão", "couve bruxelas", "Benfica", "05/04/2000")
	antonio.saudacao();
	
var beatriz = new aluno("Beatriz Barreto", "0,65", "alemão", "couve bruxelas", "Benfica", "05/04/2000")
	beatriz.saudacao();
	
var franciscoE = new aluno("Francisco Esteves", "1,73", "português", "couve bruxelas", "Benfica", "05/04/2000")
	franciscoE.saudacao();
	
var franciscoR = new aluno("Francisco Rodrigues", "1,92", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	franciscoR.saudacao();
	
var daniel = new aluno("Daniel Serrano", "2,78", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	daniel.saudacao();
	
var fabio = new aluno("Fábio Franco", "1,79", "português", "couve bruxelas", "Benfica", "05/04/2000")
	fabio.saudacao();
	
var joaoN = new aluno("João Neves", "1,80", "educação fisica", "couve bruxelas", "Benfica", "05/04/2000")
	joaoN.saudacao();
	
var joaoM = new aluno("João Madeira", "1,85", "educação fisica", "couve bruxelas", "Benfica", "05/04/2000")
	joaoM.saudacao();
	
var goncalo = new aluno("Gonçalo Simão", "1,74", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	goncalo.saudacao();
	
var luis = new aluno("Luís Catarino", "1,66", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	luis.saudacao();
	
var miguel = new aluno("Miguel Pinto", "1,40", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/20000")
	miguel.saudacao();
	
var maria = new aluno("Maria Inês", "1,91", "aplicações informáticas","couve bruxelas", "Benfica", "05/04/2000")
	maria.saudacao();
	
var nuno = new aluno("Nuno Rodrigues", "1,56", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	nuno.saudacao();
	
var pedro = new aluno("Pedro Fonseca", "1,23", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	pedro.saudacao();
	
var miguelD = new aluno("Miguel Dionísio", "1,81", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	miguelD.saudacao();
	
var ricardoG = new aluno("Ricardo Gonçalves", "2,80", " aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	ricardoG.saudacao();
	
var sandu = new aluno("Sandu Lungu", "1,12", "russo", "couve bruxelas", "Benfica", "05/04/20000")
	sandu.saudacao();
	
var ricardoP = new aluno("Ricardo Pereira", "1,39", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	ricardoP.saudacao();
	
var rodrigo = new aluno("Rodrigo Valério", "1,84", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	rodrigo.saudacao();
	
var samuel = new aluno("Samuel Vaz", "1,93", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	samuel.saudacao();
	
var tomas = new aluno("Tomás Feith", "1,68", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	tomas.saudacao();
	
var tiago = new aluno(" Tiago Arriegas", "1,67", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	tiago.saudacao();
	
var antonio = new aluno("António Campaniço", "1,99", "aplicações informáticas", "couve bruxelas", "Benfica", "05/04/2000")
	antonio.saudacao();
