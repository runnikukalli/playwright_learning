import {test, expect} from '@playwright/test';
import { on } from 'events';

test('IFrame and Tool Tip Tests', async ({ page }) => {
    await page.goto('https://jqueryui.com/tooltip/')
    const oneFrame = page.frameLocator('.demo-frame')
    const ageInpt = oneFrame.locator('#age')
    await ageInpt.hover()

    const toolTipText = oneFrame.getByRole('tooltip').textContent()
    console.log(toolTipText)
    expect(await toolTipText).toBe('We ask for your age only for statistical purposes.')  
})

test('Auto complete Tests', async ({ page }) => {
    await page.goto('https://jqueryui.com/autocomplete/')
    const oneFrame = page.frameLocator('.demo-frame')
    const autoInpt = oneFrame.locator('#tags')
    await autoInpt.fill('as')
    const suggestList = oneFrame.locator('ul#ui-id-1 li')
    await page.waitForTimeout(2000)
    expect(suggestList).toHaveCount(4)
    const count = await suggestList.count()
    console.log(count)
})