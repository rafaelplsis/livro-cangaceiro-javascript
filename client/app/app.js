System.register(['./controllers/NegociacaoController.js', './util/index.js'], function (_export, _context) {
    "use strict";

    var NegociacaoController, debounce;
    return {
        setters: [function (_controllersNegociacaoControllerJs) {
            NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
        }, function (_utilIndexJs) {
            debounce = _utilIndexJs.debounce;
        }],
        execute: function () {

            // criou a instância do controller
            const controller = new NegociacaoController();
            const $ = document.querySelector.bind(document);

            $('.form').addEventListener('submit', controller.adiciona.bind(controller));

            $('#botao-apaga').addEventListener('click', controller.apaga.bind(controller));

            $('#botao-importa').addEventListener('click', debounce(() => {
                console.log('EXECUTOU A OPERAÇÃO DO DEBOUNCE');
                controller.importaNegociacaoes();
            }, 1000));
        }
    };
});
//# sourceMappingURL=app.js.map