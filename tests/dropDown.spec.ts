import { expect, test } from '@playwright/test';

test.describe('DropDown Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
    })
    test('Single select dropdown test', async ({ page }) => {
        const singleSel = page.locator('#country')
        singleSel.scrollIntoViewIfNeeded()
        expect(await singleSel.selectOption({index: 9}))
        await page.waitForTimeout(2000)
        expect(await singleSel.inputValue()).toBe('india')

        //Using callback function and checking the options
        await page.selectOption('#country', { label: 'Germany' }).then((dropdownvalue)=>{
            expect(dropdownvalue).toEqual(['germany'])
        })
    })

    test('Multi select dropdown test', async ({ page }) => {
        const mulSel = page.locator('#animals')
        mulSel.scrollIntoViewIfNeeded()
        await mulSel.selectOption(
            [{ label: 'Cheetah'}, 
             {index: 4}, 
             {value: 'lion'}
            ])
        await page.waitForTimeout(2000)

    })
})