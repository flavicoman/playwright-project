import { test } from "@playwright/test";
import { expect } from "@playwright/test";


test.describe("Service Points GET methods", () => {

    test('Verify that API returns service points ', async ({ request }) => {
        await test.step("get servicepoints", async () => {
            const response = await request.get('/servicePoints');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns booking of given service point', async ({ request }) => {
        await test.step("get /servicePoints/bookings", async () => {
            const response = await request.get('/servicePoints/bookings',
                {
                    params: {
                        "servicePointIDs": "eccdad24-a18b-4090-87cc-43720483540f",
                        "date": "2023-09-11"
                    }
                });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })


    test('Verify that API returns service points settings ', async ({ request }) => {
        await test.step("get servicepoints settings", async () => {
            const response = await request.get('/servicePointsSettings');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns setttings of a given service point by id  ', async ({ request }) => {
        await test.step("get servicepoints settings by id", async () => {
            const response = await request.get('/servicePointsSettings/2bc88bac-34b9-43b3-bfb3-d260fad6d941');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns bookings of a given service point by id  ', async ({ request }) => {
        await test.step("get servicepoints bookings settings by id", async () => {
            const response = await request.get('/servicePointsSettings/2bc88bac-34b9-43b3-bfb3-d260fad6d941/bookings',
                {
                    params: {
                        "date": "2023-09-11"
                    }
                });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns service points settings of a given service point by id  ', async ({ request }) => {
        await test.step("get servicepoints settings by id", async () => {
            const response = await request.get('/servicePointsSettings/2bc88bac-34b9-43b3-bfb3-d260fad6d941/servicePoints');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns service points settings`s settings   ', async ({ request }) => {
        await test.step("get servicepoints settings by id", async () => {
            const response = await request.get('/servicePointsSettings/settings');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns daily schedules of a given service point by id  ', async ({ request }) => {
        await test.step("get servicepoints daily schedules by id", async () => {
            const response = await request.get('/servicePointsSettings/2bc88bac-34b9-43b3-bfb3-d260fad6d941/dailySchedules',
                {
                    params: {

                        "date": "2023-09-10"
                    }
                });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })


    test('Verify that API returns rates of a given service point by id  ', async ({ request }) => {
        await test.step("get servicepoints rates by id", async () => {
            const response = await request.get('/servicePointsSettings/2bc88bac-34b9-43b3-bfb3-d260fad6d941/rates',
                {
                    params: {
                        "servicePointIDs": "2bc88bac-34b9-43b3-bfb3-d260fad6d941"

                    }
                });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns a given rate by rateId of a given service point by id  ', async ({ request }) => {
        await test.step("get servicepoints rate by id", async () => {
            const response = await request.get('/servicePointsSettings/2bc88bac-34b9-43b3-bfb3-d260fad6d941/rates/f175ddf1-32d9-4f68-9022-436beb1eee1d',
                {
                    params: {
                        "servicePointIDs": "2bc88bac-34b9-43b3-bfb3-d260fad6d941",
                        "rateId": "f175ddf1-32d9-4f68-9022-436beb1eee1d"

                    }
                });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns a given rate override by rateId of a given service point by id  ', async ({ request }) => {
        await test.step("get servicepoints rate override by id", async () => {
            const response = await request.get('/servicePointsSettings/2bc88bac-34b9-43b3-bfb3-d260fad6d941/rates/f175ddf1-32d9-4f68-9022-436beb1eee1d/overrides',
                {
                    params: {
                        "servicePointIDs": "2bc88bac-34b9-43b3-bfb3-d260fad6d941",
                        "rateId": "f175ddf1-32d9-4f68-9022-436beb1eee1d"

                    }
                });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })




})

test.describe("Service Points POST methods", () => {

    test('Verify that API posts new service points settings ', async ({ request }) => {
        await test.step("post servicepoints settings", async () => {
            const response = await request.post('/servicePointsSettings',
                {
                    data: {

                        "name": "strdungag",
                        "incrementTime": 10,
                        "reRoundTime": 5,
                        "followSunriseSunset": true,
                        "sunriseOffset": 10,
                        "sunsetOffset": 2,
                        "markNoShows": true,
                        "noShowOffset": 10,
                        "servicePointsSettingType": 0,
                        "bookingLength": 0,
                        "organizationId": "dfcdb692-5294-429b-90f6-97d85c383631",
                        "servicePoints": [
                            {
                                "name": "string"
                            }
                        ],
                        "rates": [
                            {
                                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                "name": "string",
                                "rateId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                "nineHoleGreenFee": 0,
                                "eighteenHoleGreenFee": 0,
                                "nineHoleCartFee": 0,
                                "eighteenHoleCartFee": 0,
                                "serviceFee": 0,
                                "color": "string",
                                "allowCarts": true,
                                "greenFeeCategory": "string",
                                "greenFeeGLCode": "string",
                                "cartFeeCategory": "string",
                                "cartFeeGLCode": "string",
                                "serviceFeeCategory": "string",
                                "serviceFeeGLCode": "string",
                                "isDefault": true
                            }
                        ]
                    }
                })
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })


    test('Verify that API posts new rate to service points`s settings ', async ({ request }) => {
        await test.step("post servicepoints settings rate", async () => {
            const response = await request.post('/servicePointsSettings/',
                {
                    data: {
                        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        "name": "string",
                        "rateId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        "nineHoleGreenFee": 0,
                        "eighteenHoleGreenFee": 0,
                        "nineHoleCartFee": 0,
                        "eighteenHoleCartFee": 0,
                        "serviceFee": 0,
                        "color": "string",
                        "allowCarts": true,
                        "greenFeeCategory": "string",
                        "greenFeeGLCode": "string",
                        "cartFeeCategory": "string",
                        "cartFeeGLCode": "string",
                        "serviceFeeCategory": "string",
                        "serviceFeeGLCode": "string",
                        "isDefault": true
                    }
                })
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

})

test.describe("Service Points PUT methods", () => {
    test('Verify that API cand put service points name ', async ({ request }) => {
        await test.step("put servicepoints name", async () => {
            const response = await request.put('/servicePoints/eccdad24-a18b-4090-87cc-43720483540f', {
                data: {
                    "name": "dano"
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API cand put service points settings name ', async ({ request }) => {
        await test.step("put servicepoints ndata", async () => {
            const response = await request.put('/servicePointsSettings/bdc25a24-044f-4fa7-b280-edfb5822abc2', {
                data: {
                    "name": "kana jambe",
                    "markNoShows": true,
                    "noShowOffset": 10,
                    "prePayment": true,
                    "servicePointsSettingType": 0
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API can put data in a rate at service points settings ', async ({ request }) => {
        await test.step("put servicepoints rate by id", async () => {
            const response = await request.put('/servicePointsSettings/2bc88bac-34b9-43b3-bfb3-d260fad6d941/rates/f175ddf1-32d9-4f68-9022-436beb1eee1d',
                {
                    data: {

                        "name": "striffddg",
                        "rateId": "f175ddf1-32d9-4f68-9022-436beb1eee1d",
                        "nineHoleGreenFee": 10,
                        "eighteenHoleGreenFee": 10,
                        "nineHoleCartFee": 20,
                        "eighteenHoleCartFee": 20,
                        "serviceFee": 50,
                        "color": "string",
                        "allowCarts": true,
                        "greenFeeCategory": "TO BE DEFINED",
                        "greenFeeGLCode": "TO BE DEFINED",
                        "cartFeeCategory": "TO BE DEFINED",
                        "cartFeeGLCode": "TO BE DEFINED",
                        "serviceFeeCategory": "null",
                        "serviceFeeGLCode": "null"
                    }
                });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })
})

test.describe("Service Points DELETE method", () => {
    test('Verify that API can put data in a rate at service points settings ', async ({ request }) => {
        await test.step("put servicepoints rate by id", async () => {
            const response = await request.delete('/servicePointsSettings/2bc88bac-34b9-43b3-bfb3-d260fad6d941/rates/f175ddf1-32d9-4f68-9022-436beb1eee1d');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API can delete service points by id ', async ({ request }) => {
        await test.step("put servicepoints name", async () => {
            const response = await request.delete('/servicePoints/eccdad24-a18b-4090-87cc-43720483540f');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

})