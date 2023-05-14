

import Page from './CermatiPage.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#email');
    }

    get inputHpNum (){
        return $('#mobilePhone')
    }

    get inputPassword () {
        return $('#password');
    }

    get inputConfirmPassword () {
        return $('#confirmPassword')
    }

    get inputFirstName () {
        return $('#firstName')
    }

    get inputLastName () {
        return $('#lastName')
    }
    get inputCityName () {
        return $('#cityAndProvince')
    }
    get btnRegister () {
        return $('button[data-button-name="register-new"]');
    }
    get btnSendWa () {
        return $("[data-button-name='send-otp-whatsapp']")
    }
    get txtVerificationMethod () {
        return $("//h1[@class='header_2xOrt AppHeader_card__header-title__9bScY mx-auto text-color-gray-dark']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    
    async register (Email,HpNum,Password,ConfirmPassword,FirstName,LastName,CityName) {
        await this.inputEmail.setValue(Email);
        await this.inputHpNum.setValue(HpNum);
        await this.inputPassword.setValue(Password);
        await this.inputConfirmPassword.setValue(ConfirmPassword);
        await this.inputFirstName.setValue(FirstName);
        await this.inputLastName.setValue(LastName);
        await this.inputCityName.setValue(CityName);
        await browser.pause(3000)
        let items = await $$("[class='autocomplete__list-container_oVU2R'] div div")
        for (var i = 0;i< await items.length;i++)
        {
            if (await items[i].getText() === "KOTA TANGERANG")      
            await items[i].click();
        }
        await this.btnRegister.click();
        await this.txtVerificationMethod.waitForExist({ timeout: 5000 });
        await this.btnSendWa.click();
        await browser.pause(5000)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('app/gabung');
    }
}

export default new RegisterPage();
