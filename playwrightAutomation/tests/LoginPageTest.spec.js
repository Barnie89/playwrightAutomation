import {test,expect} from '@playwright/test';

test('Login page',async({page})=>{

// page.getByAltText=       "To locate element image with alt text"
// page.getByPlaceholder    "To locate element has placeholder"
// page.getByRole           "To locate element with tag and attributes eg: getByRole('button', {type:''submit})"
// page.getByText           "To locate a element with text value"
// page.getByLabel          "To locate element with label tag"
// page.getByTestId         "To locate element with test id attribute"
// page.getByTitle          "To locate element with title attribute"
//https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

    await page.goto('https://www.demoblaze.com/');

    await page.locator('id=login2').click();

    //await page.click('id=login2');

    await page.fill('#loginusername','pavanol');
    await page.fill("input[id='loginpassword']",'test@123');
    
    await page.click("//button[normalize-space()='Log in']");

    const logout= await page.locator("(//a[normalize-space()='Log out'])[1]");
    
    await expect(logout).toBeVisible();

   const links= await page.$$("//div[@id='tbodyid']//h4/a");

   for(const link of links){

    const linktext = await link.textContent();
    console.log("link Text value ", linktext);
   }

    await page.close();


})