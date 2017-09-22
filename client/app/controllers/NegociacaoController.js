class NegociacaoController{

    adiciona(event){
        //cancelando a submissão do formulário
        event.preventDefault();
        let $ = document.querySelector.bind(document);

        //buscando os elementos
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(inputValor.value);
    }
}