import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }
    public get btnLogout() {
        return $('.button.secondary.radius')
    }

    public async logout() {
        await this.btnLogout.click();
    }
}

export default new SecurePage();
