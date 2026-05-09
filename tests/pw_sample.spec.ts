import {expect, test} from '@playwright/test';
import { text } from 'stream/consumers';

test('should have the correct title', async ( {page} ) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const pwlink = page.getByRole('link', { name: 'PlaywrightPractice' })
    await pwlink.click()

    await expect(page).toHaveTitle(/PlaywrightPractice/)

//    const textbox = page.getByRole('textbox', { name: 'Username:' })
    const textbox = page.getByRole('textbox', { name: 'username' })
    await textbox.fill('cool')

    console.log(await textbox.inputValue())
    expect(await textbox.inputValue()).toBe('cool')

    await page.getByRole('button', { name: 'START' }).click()
    const newBtn = page.getByRole('button', { name: 'STOP' })
    expect(await newBtn.textContent()).toBe('STOP')

    await page.getByText('Email Address:').fill('testing')

    await page.getByPlaceholder('Enter your full name').fill('testing')

    const toolTipTxt = await page.getByText('This text has a tooltip').textContent()
    console.log(toolTipTxt)

});

test('locator using filters', async ( {page} ) => {

    await page.goto('https://demoblaze.com/')
    await page.waitForTimeout(9000) 

    const items = page.locator('.card-block a')
    const count = await items.count()
    console.log(count)

    console.log(await items.allTextContents())

});