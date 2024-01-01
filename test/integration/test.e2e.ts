import { browser, expect } from '@wdio/globals'

describe('Title should include Ktpql Books', () => {
    it('should show application title', async () => {
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toContain('Ktpql Books');
    })
})

