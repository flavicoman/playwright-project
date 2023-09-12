import { test } from "@playwright/test";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

let employee_list = new Array


test.describe("Users page GET methods ", () => {

    // test('get current users', async ({ request }) => {
    //     await test.step("get users", async () => {
    //         const response = await request.get('/users/current');
    //         expect(response).toBeOK()
    //         console.log(await response.json())
    //     })
    // })

    // test('get current members', async ({ request }) => {
    //     await test.step("get members", async () => {
    //         const response = await request.get('/users/members', {
    //             params: {
    //                 "SearchValue": "",
    //                 "Page.Number": "1",
    //                 "Page.Size": "20"
    //             }
    //         });
    //         expect(response).toBeOK()
    //         await response.json();
    //     })
    // })

    // test('get current customers', async ({ request }) => {
    //     await test.step("get customers", async () => {
    //         const response = await request.get('/users/customers', {
    //             params: {
    //                 "SearchValue": "",
    //                 "Page.Number": "1",
    //                 "Page.Size": "20"
    //             }
    //         });
    //         expect(response).toBeOK();
    //         console.log(await response.json());
    //     })
    // })

    // test('get users/{id}', async ({ request }) => {
    //     await test.step("get users's id", async () => {
    //         const response = await request.get('/users/8b35728e-9fb3-48c8-9e59-2c35984dc939');
    //         expect(response).toBeOK();
    //         console.log(await response.json());
    //     })
    // })

    // test('add new customer', async ({ request }) => {
    //     await test.step("add new customer", async () => {
    //         const response = await request.post('/users/customers', {
    //             data: {
    //                 "firstName": "asdodsno",
    //                 "lastName": "gdlo",
    //                 "email": "aldsh@go.com",
    //                 "phoneNumber": " 077364"
    //             }
    //         })
    //         expect(response.ok()).toBeTruthy();
    //         const data = await response.json();
    //         employee_list.push(data);
    //     })
    // });

      test('get users/{id}/booking-settings', async ({ request }) => {
        await test.step("get users's id", async () => {
            const response = await request.get('/users/8b35728e-9fb3-48c8-9e59-2c35984dc939/booking-settings');
            expect(response).toBeOK();
            console.log(await response.json());
        })
    })

    test('get users/{id}/next-reservation', async ({ request }) => {
        await test.step("get users's reservation", async () => {
            const response = await request.get('/users/8b35728e-9fb3-48c8-9e59-2c35984dc939/next-reservation');
            expect(response).toBeOK();
            console.log(await response.json());
        })
    })



    test('get users/{id}/booking-status', async ({ request }) => {
        await test.step("get users's booking-status", async () => {
            const response = await request.get('/users/8b35728e-9fb3-48c8-9e59-2c35984dc939/booking-status');
            expect(response).toBeOK();
            console.log(await response.json());
        })
    })

    test('get users/{id}/memberships', async ({ request }) => {
        await test.step("get users's memberships", async () => {
            const response = await request.get('/users/8b35728e-9fb3-48c8-9e59-2c35984dc939/memberships');
            expect(response).toBeOK();
            console.log(await response.json());
        })
    })

    test('get /users/{id}/external-subscriptions', async ({ request }) => {
        await test.step("get users's external-subscriptions", async () => {
            const response = await request.get('/users/8b35728e-9fb3-48c8-9e59-2c35984dc939/external-subscriptions');
            expect(response).toBeOK();
            console.log(await response.json());
        })
    })

    test('get /users/{id}/stats', async ({ request }) => {
        await test.step("get users's stats", async () => {
            const response = await request.get('/users/stats');
            expect(response).toBeOK();
            console.log(await response.json());
        })
    })
    
    
    



})

test.describe("Users page POST methods", () => {
    
    // test('post users/search', async ({ request }) => {
    //     await test.step("post users/search", async () => {
    //         const response = await request.post('/users/search', {
    //             data: {
    //                 "SearchValue": "",
    //                 "Page.Number": "1",
    //                 "Page.Size": "10"
    //             }
    //         });
    //         expect(response).toBeOK()
    //        console.log( await response.json());
    //     })
    // })

    // test('post users/members', async ({ request }) => {
    //     await test.step("post users/members", async () => {
    //         const response = await request.post('/users/members', {
    //             data: {
    //                 "firstName": "flaviano",
    //                 "lastName": "italiano",
    //                 "email": "americano@italiano",
    //                 "phoneNumber": "299288",
    //                 "membershipPlanId": "31a44ff5-1f8c-4613-87d5-fad04b0574b0",
    //                 "startDate": "2023-09-11T02:00:00"
                  
    //             }
    //         });
    //         expect(response).toBeOK()
    //        console.log( await response.json());
    //     })
    // })

    //   test('post users/customer', async ({ request }) => {
    //     await test.step("post users/customers", async () => {
    //         const response = await request.post('/users/customers', {
    //              headers : { 
    //                  "Cookie" : "ARRAffinity=472816c9b34471b00f74202a0071fe83c983503ff5e0026fc03c99476aa57f6d;ARRAffinitySameSite=472816c9b34471b00f74202a0071fe83c983503ff5e0026fc03c99476aa57f6d",
    //                   "Content-Type" :"application/json"
    //                 },


    //             data:JSON.stringify( {
    //                 "firstName":"alonsoiano",
    //                 "lastName":"italianodsss",
    //                 "email":"americano@italisssano",
    //                 "phoneNumber" : "29928834224",
    //             })
    //         });
    //         expect(response).toBeOK()
    //        console.log( await response.json());
    //     })
    // })



})