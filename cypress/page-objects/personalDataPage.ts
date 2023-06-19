export class PersonalDataPage {

    public selectors = {
        rentForm: {
            nameField: 'input#name',
            lastNameField: 'input#last_name',
            cardNumberField: 'input#card_number',
            emailField: 'input#email'
        },
        rentButton: 'button[class*="btn-primary"]',
        alerts: {
            successMessage:  'h2[class*="alert alert-success"]'
        },
    };

    fillPersonalDataAndSubmit() {
        cy.fixture('personalData').as('data');
        cy.get('@data').then((data) => {
            cy.get(this.selectors.rentForm.nameField).type(data.name);
            cy.get(this.selectors.rentForm.lastNameField).type(data.lastName);
            cy.get(this.selectors.rentForm.cardNumberField).type(data.cardNumber);
            cy.get(this.selectors.rentForm.emailField).type(data.email);
        })
        cy.get(this.selectors.rentButton).click()
    }

    verifySuccessMessage() {
        cy.get(this.selectors.alerts.successMessage).should('be.visible');
    }


}
