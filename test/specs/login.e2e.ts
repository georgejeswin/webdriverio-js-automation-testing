import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('The Internet app Login', () => {
    it('should login with valid credentials', async () => {
    await LoginPage.open()

    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    })
})

describe("The internet app logout", () => {
    it('should logout', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');

        await SecurePage.logout();
        await expect(LoginPage.logoutFlash).toBeExisting();
        await expect(LoginPage.logoutFlash).toHaveTextContaining('You logged out of the secure area!')
    })
})