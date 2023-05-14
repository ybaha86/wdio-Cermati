import LoginPage from '../pageobjects/CermatiPage.js'
import RegisterPage from '../pageobjects/CermatiRegister.js'


describe('Cermati User Register', () => {
    it('register with new user', async () => {
        await RegisterPage.open()
        await RegisterPage.register('yunus.bahar86@gmail.com','085284226419','Developer1','Developer1','Yunus','Bahara','TANGERANG')
        //await RegisterPage.getCityName('TANGERANG')
        //await browser.pause(5000)
        
    })
})


