class Popup {
    constructor(className) {
        this.className = className;
        this.popup = document.querySelector(`.${className}`);
        this._keyBoardEscClose = this._keyBoardEscClose.bind(this);
    }
  
    _keyBoardEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
  
  
    open() {
        this.popup.classList.add('popup_active');
        document.addEventListener('keyup', this._keyBoardEscClose);
    }
  
    close() {
        this.popup.classList.remove('popup_active');
        document.removeEventListener('keyup', this._keyBoardEscClose);
    }
  
    setEventListener() {
        this.popup.addEventListener('click', (event) => {
            if (event.target.classList.contains(this._className) || event.target.closest('.popup__close')) {
                this.close();
            }
        })
    }
  }