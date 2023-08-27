import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="alert"
export default class extends Controller {
  static values = {
    url: String
  }

  connect() {
    console.log("Shalom 🥸")
    // fetch(this.urlValue).then("Hello again 👋")
  }
}
