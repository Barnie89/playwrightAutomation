//const {test,expect} =require('playwright/test');

import {test,expect} from '@playwright/test';

test('Home Page', async ({page})=>{
    
  await  page.goto('https://www.demoblaze.com/');
  const pageTitle= page.title();

  console.log('Page Title is ',pageTitle);

  await expect(page).toHaveTitle('STORE');
  await expect(page).toHaveURL('https://www.demoblaze.com/');
  await page.close();


})