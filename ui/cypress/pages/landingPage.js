import * as landingLocators from '../locators/landingLocators.js'
import { siteTitles } from '../strings/commonStrings.js'

export const verifyLandingPageLoaded = () => {
    cy.checkPageTitle(siteTitles.landing)
    cy.get(landingLocators.heroContent).should('be.visible')
}
