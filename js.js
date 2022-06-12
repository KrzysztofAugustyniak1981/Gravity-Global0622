
let a = 0;
const ModalWindow = {
    init() {
        document.body.addEventListener("click", e => {
            if (e.target.classList.contains("modal_close")) {
                this.closeModal(e.target);
            }
        });

        this.openModal();
    },

    getHtmlTemplate(modalOptions) {
        return `
            <div class="modal_overlay">
            <div class="modal_window">
                <div>
                    <span class="modal_title">${modalOptions.title}</span>
                    <button class="modal_close material-icons">close</button>
                </div>
                <div class="modal_content">
                    ${modalOptions.content}
                </div>
            </div>
            </div>
        `;
    },

    openModal(modalOptions = {}) {

        modalOptions = Object.assign({
            title: 'Alert!',
            content: `You have clicked ${a} times to related button.`
        }, modalOptions);

        const modalTemplate = this.getHtmlTemplate(modalOptions);
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
    },

    closeModal(closeButton) {
        const modalOverlay = closeButton.parentElement.parentElement.parentElement;
        document.body.removeChild(modalOverlay);
    }
    
};

function myFunction() {
    a++
    ModalWindow.init()
}


