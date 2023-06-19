export class SearchPage {
    public selectors = {
        searchForm: {
            selectCountry: 'select#country',
            selectCity: 'select#city',
            pickUpDate: 'input#pickup',
            dropOffDate: 'input#dropoff',
            searchButton: 'button[type="submit"]'
        },
        alerts: {
            errorMessage:  'h3[class*="alert-danger"]'
        },
        searchResults: {
            mainBlock: '#search-results',
            line: '#search-results>tbody>tr',
            rentButton: 'a[class*="btn-success"]'
        },
        cardDetails: {
            cardBody: '.card-body',
            cardDates: '.card-body>h6',
            rentButton: 'a[class*="btn-primary"]'
        }
    };

    selectCountryAndCity(country:string, city:string ) {
        cy.get(this.selectors.searchForm.selectCountry).select(country);
        cy.get(this.selectors.searchForm.selectCity).select(city);
    }

    selectDates(pickUp:string, dropOff:string ) {
        cy.get(this.selectors.searchForm.pickUpDate).type(pickUp);
        cy.get(this.selectors.searchForm.dropOffDate).type(dropOff);
    }

    selectFirstSearchResult(){
        cy.get(this.selectors.searchResults.mainBlock).should('be.visible');
        cy.get(this.selectors.searchResults.line).first().find(this.selectors.searchResults.rentButton).click();
    }

    checkCardDetails(pickupDate: string, dropOffDate: string){
        cy.get(this.selectors.cardDetails.cardBody).should('be.visible')
        cy.get(this.selectors.cardDetails.cardDates).should('contain.text', pickupDate)
        cy.get(this.selectors.cardDetails.cardDates).should('contain.text', dropOffDate)
        cy.get(this.selectors.cardDetails.rentButton).click()
    }

}
