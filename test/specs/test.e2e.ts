import { browser, expect } from '@wdio/globals'

describe('Title should include Hello World', () => {
    it('should print application title', async () => {
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toContain('Hello World');
    })
})

