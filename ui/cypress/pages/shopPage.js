import { naviLinks } from '../locators/commonLocators.js'
import { shopItem } from '../locators/shopLocators.js'
import * as productLocators from '../locators/productLocators.js'
import { siteTitles } from '../strings/commonStrings.js'

export const navigateToShop = () => {
    cy.get(naviLinks.shop).click()
    cy.checkUrl('shop')
    cy.checkPageTitle(siteTitles.shop)
}

export const openProductPageBySku = (sku) => {
    cy.get(shopItem(sku)).click()
    cy.checkUrl(sku)
}

export const verifyIsProductOnPage = (productName) => {
    cy.get(productLocators.productHeading).within(() => {
        cy.get('h1').should('contain.text', productName)
    })
}
