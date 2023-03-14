var Modal = /** @class */ (function () {
    function Modal(ref) {
        this.ref = ref;
    }
    Modal.prototype.show = function () {
        var div = this.ref;
        if (div.parentNode !== null) {
            var parentElement = div.parentNode;
            parentElement.style.display = 'block';
        }
        //this.ref.style.display = 'block';
        this.btnClose = this.ref.querySelector('#btnClose');
        this.btnClose.addEventListener('click', this.hide.bind(this));
    };
    Modal.prototype.hide = function () {
        if (this.ref.parentNode !== null) {
            this.ref.parentNode.style.display = 'none';
        }
    };
    return Modal;
}());
var listArticles = document.getElementById('listArticles');
var btnOpenModal = document.getElementById('btnOpenModal');
listArticles.addEventListener('click', function (e) {
    modal.show();
});
// btnOpenModal.addEventListener('click', () => {
// })
var modalRef = document.getElementById('modal');
var modal = new Modal(modalRef);
