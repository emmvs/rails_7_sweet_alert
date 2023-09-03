import { Controller } from "@hotwired/stimulus";
import Swal from 'sweetalert2';

// Connects to data-controller=“alert”
export default class extends Controller {
  static values = {
    html: String,
    title: String,
    confirmButtonText: String,
    showCancelButton: Boolean,
    cancelButtonText: String
  }
  connect() {
    console.log("Shalom 🥸")
  }

  initSweetalert() {
    Swal.fire('Hello!', 'This is a SweetAlert2 alert!', 'success');
  }


  // initSweetalert(event) {
    // event.preventDefault();
  //   Swal.fire({
  //     html: this.htmlValue,
  //     title: this.titleValue,
  //     showCancelButton: this.showCancelButtonValue,
  //     confirmButtonText: this.confirmButtonTextValue,
  //     cancelButtonText: this.cancelButtonTextValue
  //   }).then((action) => {
  //     if (action.isConfirmed) {
  //       this.element.click();
  //     }
  //   })
  // }
}
