import { View } from './View.js';

export class MessageView extends View{

    template(model){
        return model.texto
                ?`<p class="alert alert-info">${model.texto}</p>`
                :`<p></p>`;
    }
}