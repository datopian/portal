/// <reference types="cypress" />
export {};

describe('Test Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('renders the hero title', () => {
    cy.contains('Find, Share and Publish Quality Data with Datahub');
  });
  it('checks that a search form exists', () => {
    cy.get('form').type('dataset').contains('Search');
  });
  it('submits the search form', () => {
    cy.get('form').find('[type="text"]').type('my-dataset');
    cy.get('form').submit();
    cy.url().should('include', '/search?q=my-dataset&sort=');
    cy.get('.text-3xl')
      .should('be.visible')
      .should('have.text', '366 results found');
  });
  it('shows the recent datasets', () => {
    cy.contains('Recent Datasets');
  });
  it('returns the expected number of recent datasets', () => {
    cy.get('.recent')
      .find('div')
      .should(($div) => {
        expect($div).to.have.length(3);
      });
  });
});
