class Modal {

    ref: HTMLDivElement;
    btnClose: HTMLButtonElement ;

    constructor(ref: HTMLDivElement) {
        this.ref = ref;
    }

    show() {
        const div= this.ref as Element;
        if (div.parentNode !== null) {
            const parentElement = div.parentNode as Element;
            parentElement.style.display = 'block';
          }
        //this.ref.style.display = 'block';
        this.btnClose = this.ref.querySelector('#btnClose') as HTMLButtonElement;
        this.btnClose.addEventListener('click', this.hide.bind(this));
    }

    hide() {

        if (this.ref.parentNode !== null) {
            this.ref.parentNode.style.display = 'none';
          }
       
    }
}

const listArticles: HTMLDivElement = document.getElementById('listArticles') as HTMLDivElement;
const btnOpenModal: HTMLButtonElement = document.getElementById('btnOpenModal') as HTMLButtonElement;

listArticles.addEventListener('click', (e: MouseEvent) => {
    modal.show();
    
  });

// btnOpenModal.addEventListener('click', () => {
    
// })

const modalRef: HTMLDivElement = document.getElementById('modal') as HTMLDivElement;
const modal = new Modal(modalRef);





