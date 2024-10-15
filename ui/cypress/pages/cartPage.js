import * as productLocators from '../locators/productLocators.js'
import { miniCart, cart } from '../locators/cartLocators.js'
import { siteTitles } from '../strings/commonStrings.js'

export const addProductToCart = () => {
    cy.get(productLocators.addToCartButton).click()
    cy.get(miniCart.label).should('contain.text', '1')
    cy.get(miniCart.container).should('be.visible')
    cy.get(miniCart.checkoutButton).should('be.visible')
}

export const verifyProductAddedToCart = (locator, productName) => {
    cy.get(locator).contains(productName).should('be.visible')
}

export const verifyProductsAmmountInMiniCart = () => {
    cy.get(miniCart.itemCounter).then(($cartItemCount) => {
        cy.get(miniCart.quantity)
            .invoke('val')
            .should('eq', $cartItemCount.text())
    })
}

export const navigateToCart = () => {
    cy.get(miniCart.container).find(miniCart.checkoutButton).click()
    cy.checkUrl('cart-n-checkout')
    cy.checkPageTitle(siteTitles.cart)
}

export const verifyProductsAmmountInCart = () => {
    cy.get(miniCart.itemCounter).then(($cartItemCount) => {
        cy.get(cart.list)
            .its('length')
            .should('eq', Number($cartItemCount.text()))
    })
}

