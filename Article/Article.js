// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'Expand';
    this.expandButton.addEventListener('click', () => {this.expandArticle()});
    this.closeButton = this.domElement.querySelector('.closeButton');
    this.closeButton.textContent = 'Close';
    this.closeButton.addEventListener('click', () => {this.closeArticle()});
  }

  expandArticle() {
    const ARTICLE_OPEN_CLASS = 'article-open';
    if (this.domElement.classList.contains(ARTICLE_OPEN_CLASS)) {
      this.domElement.classList.remove(ARTICLE_OPEN_CLASS);
      this.expandButton.textContent = 'Expand';
    } else {
      this.domElement.classList.add(ARTICLE_OPEN_CLASS);
      this.expandButton.textContent = 'Collapse';
    }
  }

  closeArticle() {
    const ARTICLE_CLOSE_CLASS = 'article-closed';
    this.domElement.classList.add(ARTICLE_CLOSE_CLASS);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach( (article) => {
  return new Article(article);
});