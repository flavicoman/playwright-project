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
            const response = await request.post('/organizations/dfcdb692-5294-429b-90f6-97d85c383631/bookingSettings', {
                data: {
                    "bookingURL": "https://dev-samiDuncadala.co"
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API can post membership settings to organization', async ({ request }) => {
        await test.step("post memberships settings ", async () => {
            const response = await request.post('/organizations/2128499f-0f3e-4e2f-a9f8-e64ff8e64ac7/membershipSettings', {
                data: {
                    "maximumMembershipsAllowed": 4
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API can post membership plan to organization', async ({ request }) => {
        await test.step("post membership plan ", async () => {
            const response = await request.post('/organizations/da3f24ab-ea76-402d-aa4b-b8a3c6ad4c00/membershipPlans', {
                data: {
                    name: "heyhelloyeshereiam",
                    color: "#FF456A",
                    bookingGroupId: "432630d9-adfe-4c08-819c-0d75ed06f4fe",
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })
})

test.describe("Organizations PUT method", () => {
    test('Verify that API can put new organizations settings', async ({ request }) => {
        await test.step("put new organizations settings ", async () => {
            const response = await request.put('/organizations/a5a6395a-c670-4ebe-be52-051d2e727b3f', {
                data: {
                    name: 'Sad Valley Indoor Cool Club',
                    primaryEmail: 'default@defaulty.com',
                    website: 'golfcourse.com',
                    language: 'en',
                    country: 'us',
                    currency: 'USD',
                    address1: '123 Main St',
                    address2: null,
                    region: 'Utah',
                    city: 'Bluffdale',
                    postalAddress: '84065',
                    timeZoneId: 'America/Denver',
                    servicePointsSettingId: '9a7d67ce-fdbd-43ea-a5af-c76181f76a80',
                    showTermsAndConditions: true,
                    termsAndConditionsUrl: "https://www.ggooog.com",
                    showCancellationPolicy: false,
                    cancellationPolicyUrl: null
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API can modify maximum memberships allowed', async ({ request }) => {
        await test.step("put new memberships number allowance ", async () => {
            const response = await request.put('/organizations/a5a6395a-c670-4ebe-be52-051d2e727b3f/membershipSettings', {
                data: {
                    "maximumMembershipsAllowed": 1
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API can modify  membership plan', async ({ request }) => {
        await test.step("put new membership plan details ", async () => {
            const response = await request.put('/organizations/a5a6395a-c670-4ebe-be52-051d2e727b3f/membershipPlans/1d672583-69a6-42d9-af58-c3eee08e1990', {
                data: {
                    "name": "heyehello",
                    "color": "#FF23A2",
                    "bookingGroupId": "279ead4b-a227-4db7-84f2-09272d9441e1",
                    "maxHour": 2,
                    "maxMonth": 3,
                    "externalId": ""
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })
})

test.describe("Organizations DELETE method", () => {

    // test('Verify that API can delte membership plan by id ', async ({ request }) => {
    //     await test.step("delete membership plan ", async () => {
    //         const response = await request.delete('/organizations/a5a6395a-c670-4ebe-be52-051d2e727b3f/membershipPlans/1d672583-69a6-42d9-af58-c3eee08e1990');
    //         expect(response).toBeOK();
    //         console.log(await response.json());
    //     })
    // })
})