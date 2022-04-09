Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get("#firstName").type("Sandra");
    cy.get("#lastName").type("Lourenco");
    cy.get("#email").type("sandra@email.com");
    cy.get("#open-text-area").type('Testando');
    cy.contains('button', 'Enviar').click();

})