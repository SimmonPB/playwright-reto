import {test, expect} from '@playwright/test';

test('check left options', async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();

    const leftmenuitems = page.getByLabel('sidepanel').getByRole('listitem')
    const currentmenuitems = await leftmenuitems.count()

    console.log('Current menu items: ' , currentmenuitems)


    const currentmenuitemsnames: string[] = []

    for (let i = 0; i < currentmenuitems; i++) {

        const menuitem = await leftmenuitems.nth(i).innerText()
        currentmenuitemsnames.push(menuitem)
    }

    console.log(currentmenuitemsnames)

    const expectedmenuitemsnames = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim','Buzz']

    expect(currentmenuitemsnames).toEqual(expectedmenuitemsnames)




})