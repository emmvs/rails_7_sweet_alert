import { Controller } from "@hotwired/stimulus";
import Swal from 'sweetalert2';

// Connects to data-controller=“alert”
export default class extends Controller {
  static values = {
    html: String,
    title: String,
    icon: String,
    confirmButtonText: String,
    showCancelButton: Boolean,
    cancelButtonText: String
  }

  // initSweetalert() {
  //   Swal.fire('Hello!', 'This is a SweetAlert2 alert!', 'success');
  // }

  initSweetalert(event) {
    event.preventDefault();
    Swal.fire({
      html: this.htmlValue,
      title: this.titleValue,
      icon: this.iconValue,
      showCancelButton: this.showCancelButtonValue,
      confirmButtonText: this.confirmButtonTextValue,
      cancelButtonText: this.cancelButtonTextValue
    })
    // If you want to do something after
    // the action is confirmed 👇🏻

    // .then((action) => {
    //   if (action.isConfirmed) {
    //     this.element.click();
    //   }
    // })
  }
}
