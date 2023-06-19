import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { SearchPage } from "../../page-objects/searchPage";
const searchPage = new SearchPage()

Given("I am on search page", () => {
    cy.visit("/");
});

When("I set {string} and {string}", (country: string, city: string) => {
    searchPage.selectCountryAndCity(country, city)
});

When("I set {string} and {string} dates", (pickUp: string, dropOff: string) => {
    searchPage.selectDates(pickUp, dropOff)
});

When("I press search button", () => {
    cy.get(searchPage.selectors.searchForm.searchButton).click()
})

Then("I should see the error {string}", (error) => {
    cy.get(searchPage.selectors.alerts.errorMessage).should('be.visible').should('contain', error)
});

Then("I finish selecting and verify dates: {string} and {string}", (pickUp: string, dropOff: string) => {
   searchPage.selectFirstSearchResult()
   searchPage.checkCardDetails(pickUp, dropOff)
});
