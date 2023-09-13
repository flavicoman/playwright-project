import { test } from "@playwright/test";
import { expect } from "@playwright/test";

test.describe("Organizations GET method", () => {

    test('Verify that API returns organizations ', async ({ request }) => {
        await test.step("get organizations", async () => {
            const response = await request.get('/organizations');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })


    test('Verify that API returns organization by id ', async ({ request }) => {
        await test.step("get organization by id ", async () => {
            const response = await request.get('/organizations/a5a6395a-c670-4ebe-be52-051d2e727b3f');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns organization membership settings by id ', async ({ request }) => {
        await test.step("get membership settings ", async () => {
            const response = await request.get('/organizations/a5a6395a-c670-4ebe-be52-051d2e727b3f/membershipSettings');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })



})


test.describe("Organizations POST method", () => {

    test('Verify that API can post bookingURL to organization', async ({ request }) => {
        await test.step("post booking URL ", async () => {
            const response = await request.post('/organizations/a5a6395a-c670-4ebe-be52-051d2e727b3f/bookingSettings', {
                data: {
                    "bookingURL": "url.com.web.net"
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API can post membership settings to organization', async ({ request }) => {
        await test.step("post memberships settings ", async () => {
            const response = await request.post('/organizations/a5a6395a-c670-4ebe-be52-051d2e727b3f/membershipSettings', {
                data: {
                    "maximumMembershipsAllowed": 10
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API can post membership plan to organization', async ({ request }) => {
        await test.step("post membership plan ", async () => {
            const response = await request.post('/organizations/a5a6395a-c670-4ebe-be52-051d2e727b3f/membershipPlans', {
                data: {
                    "name": "heyhelloyeshereiam",
                    "color": "#FF456A",
                    "bookingGroupId": "432630d9-adfe-4c08-819c-0d75ed06f4fe",
                    "maxHour": 60,
                    "maxMonth": 12,
                    "externalId": "string"
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

})


test.describe("Organizations PUT method", () => {

})


test.describe("Organizations DELETE method", () => {

})