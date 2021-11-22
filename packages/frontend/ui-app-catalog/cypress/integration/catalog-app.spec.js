/* eslint-disable no-undef,jest/expect-expect */
/// <reference types="cypress" />

context('CatalogApp', () => {
  it('opens page listing app catalog', () => {
    cy.visit('http://localhost:4200/');
    cy.wait(1000);
    cy.screenshot('app-catalog-list-screen');
  });
});
