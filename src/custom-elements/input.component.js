 class Input extends HTMLInputElement {
     
   static get observedAttributes(){
      return ['data-test'];
   }
   
   constructor() {
        super();

        this.addEventListener('blur', () => {
            console.log('saludos desde mi componente extendido', this.value);   
        });
     }

     connectedCallback() {
        console.log('el componente se inserto');        
     }

     disconnectedCallback(){
        console.log('el componente murio');
     }

     attributeChangedCallback(name, oldValue, newValue){
        console.log('cambio un valor de los atributos');
        
     }

     adoptedCallback(oldDocument, newDocument) {
        console.log('cambio el componente de documento');
        
     }
 }

 customElements.define('input-test', Input, {extends: 'input'});