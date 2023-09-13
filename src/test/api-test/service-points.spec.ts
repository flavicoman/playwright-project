import { test } from "@playwright/test";
import { expect } from "@playwright/test";


test.describe("Service Points GET methods", () => {

    test('get servicepoints', async ({ request }) => {
        await test.step("get servicepoints", async () => {
            const response = await request.get('/servicePoints');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('get /servicePoints/bookings', async ({ request }) => {
        await test.step("get /servicePoints/bookings", async () => {
            const response = await request.get('/servicePoints/bookings',
                {
                    params: {
                        "servicePointIDs": "eccdad24-a18b-4090-87cc-43720483540f",
                        "date": ""
                    }
                });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })




})