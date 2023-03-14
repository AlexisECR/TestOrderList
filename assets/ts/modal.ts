class Modal {

  ref: HTMLDivElement;
  btnClose: HTMLButtonElement;

  constructor(ref: HTMLDivElement) {
    this.ref = ref;
  }

  show() {
    this.ref.style.display = 'block';
    this.btnClose = this.ref.querySelector('#btnClose') as HTMLButtonElement;
    this.btnClose.addEventListener('click', this.hide.bind(this));
  }

  hide() {
    this.ref.style.display = 'none';
  }
}

const listArticles: HTMLDivElement = document.getElementById('listArticles') as HTMLDivElement;
const btnOpenModal: HTMLButtonElement = document.getElementById('btnOpenModal') as HTMLButtonElement;

listArticles.addEventListener('click', (e: MouseEvent) => {
  modal.show();

});

const modalRef: HTMLDivElement = document.getElementById('modal') as HTMLDivElement;
const modal = new Modal(modalRef);





