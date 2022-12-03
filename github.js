class gitComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="GIT" class="tabcontent">
    <h3>GIT</h3>
  </div>`;
  }
}

customElements.define("git-comp", gitComponent);
