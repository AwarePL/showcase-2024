import { verifyLandingPageLoaded } from '../pages/landingPage.js'
import {
    navigateToShop,
    openProductPageBySku,
    verifyIsProductOnPage,
} from '../pages/shopPage.js'
import {
    addProductToCart,
    verifyProductAddedToCart,
    verifyProductsAmmountInMiniCart,
    navigateToCart,
    verifyProductsAmmountInCart,
} from '../pages/cartPage.js'
import { miniCart, cart } from '../locators/cartLocators.js'
import { productNames } from '../strings/shopStrings.js'

describe('Visit Ploom UK: Buy Heated Tobacco Products, Devices and Kits', () => {
    Cypress.on('uncaught:exception', () => {
        return false
    })

    beforeEach(() => {
        cy.setAgeCookie()
        cy.visit('')
        verifyLandingPageLoaded()
        cy.passPrivacyTerms()
    })

    it('Find Ploom X Advanced by SKU and add it to the cart', () => {
        navigateToShop()
        openProductPageBySku('ploom-x-advanced')
        verifyIsProductOnPage(productNames.ploomXAdvanced('Black'))
        addProductToCart()
        verifyProductAddedToCart(
            miniCart.list,
            productNames.ploomXAdvanced('Black')
        )
        verifyProductsAmmountInMiniCart()
        navigateToCart()
        verifyProductsAmmountInCart()
        verifyProductAddedToCart(
            cart.list,
            productNames.ploomXAdvanced('Black')
        )
    })
})
