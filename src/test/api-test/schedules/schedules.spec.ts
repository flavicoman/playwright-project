import { test } from "@playwright/test";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

let servicePointsSettingId = "2bc88bac-34b9-43b3-bfb3-d260fad6d941";

test.describe("Schedules GET methods ", () => {

    test('Verify that API returns schedules ', async ({ request }) => {
        await test.step("get schedules", async () => {
            const response = await request.get('/schedules');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns schedule by id  ', async ({ request }) => {
        await test.step("get schedules by id ", async () => {
            const response = await request.get('/schedules/a539a08c-7270-45a6-835e-fda60a61ed6a');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })

    test('Verify that API returns schedule occurences  ', async ({ request }) => {
        await test.step("get schedules by id ", async () => {
            const response = await request.get('/schedules/occurrences', {
                params: {
                    "servicePointsSettingId": "2bc88bac-34b9-43b3-bfb3-d260fad6d941",
                    "start": "2023-01-01",
                    "end": "2024-01-01"
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })
})

test.describe("Schedules POST methods", () => {


    test('Verify that API can post schedules ', async ({ request }) => {
        await test.step("post schedules", async () => {
            const response = await request.post('/schedules', {
                params: { "servicePointsSettingId": "" },
                data: {
                    "name": "hey hello",
                    "color": "#a345g6",
                    "startDate": "2023-09-14",
                    "endDate": "2023-09-18",
                    "startTime": {
                        "ticks": 1
                    },
                    "endTime": {
                        "ticks": 5
                    },
                    "recurrence": 2,
                    "servicePointsSettingId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "occurrences": [
                        {
                            "dayOfWeek": 0,
                            "date": "2023-09-14T06:43:40.230Z"
                        }
                    ],
                    "fees": [
                        {
                            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                            "name": "string",
                            "rateId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                            "nineHoleGreenFee": 0,
                            "eighteenHoleGreenFee": 0,
                            "nineHoleCartFee": 0,
                            "eighteenHoleCartFee": 0,
                            "serviceFee": 0
                        }
                    ],
                    "scheduleServicePointRules": [
                        {
                            "reroundToServicePointId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                            "allowOnlineBooking": true,
                            "players": [
                                1
                            ],
                            "holes": [
                                9
                            ],
                            "movements": [
                                0
                            ],
                            "servicePointId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                        }
                    ],
                    "scheduleBookingGroupRules": [
                        {
                            "allowBooking": true,
                            "bookingGroupId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                        }
                    ]
                }
            });
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })
})

test.describe("Schedules PUT methods", () => {

    test("Verify API can put new schedule", async ({ request }) => {
        const _response = await request.put('/schedules/a539a08c-7270-45a6-835e-fda60a61ed6a',
            {
                data: {
                    "id": "dc51dd4c-aefd-46ac-80f8-e598900bf557",
                    "isDefault": false,
                    "fees": [],
                    "scheduleServicePointRules": [{ "servicePointId": "341c919d-1913-47a4-9259-015ec992f978", "allowOnlineBooking": true }, { "servicePointId": "8fc0f272-83ef-4dd0-9493-79e53cf91ee4", "allowOnlineBooking": true }, { "servicePointId": "252e4a31-04a9-4066-b625-26e467214df3", "allowOnlineBooking": false }, { "servicePointId": "9f1a84e3-edb0-4f53-91c2-70934d8db879", "allowOnlineBooking": true }], "scheduleBookingGroupRules": [{ "bookingGroupId": "9fd2274f-fbbb-4f9b-9c94-29389a3129c3", "allowBooking": false }, { "bookingGroupId": "f6a3a549-1f73-4890-85e5-f83d0df4888e", "allowBooking": false }, { "bookingGroupId": "9bc6654c-3f0d-45fd-a412-49c21b7c89c4", "allowBooking": false }, { "bookingGroupId": "792c9cfd-6187-4525-8adb-09b3c5bfd31d", "allowBooking": false }, { "bookingGroupId": "f35dd88e-9ccc-480b-ae4f-cc278c833399", "allowBooking": true }, { "bookingGroupId": "fba314a3-03e6-46ef-b01e-f54f5392cab1", "allowBooking": true }, { "bookingGroupId": "825ca29f-891e-4e67-a038-1bc7cd893cf6", "allowBooking": false }, { "bookingGroupId": "3501387f-176e-4703-87de-277e6dd65270", "allowBooking": false }, { "bookingGroupId": "0f2c77c2-e8b2-452f-98ef-595fe12883dd", "allowBooking": false }, { "bookingGroupId": "dc9e972f-7e4f-4ded-b4e4-82ef134ef769", "allowBooking": false }, { "bookingGroupId": "22ce3bce-e99a-483a-8ff3-c156fae647f7", "allowBooking": false }, { "bookingGroupId": "66707a83-30fd-4844-a19c-564a95415bbe", "allowBooking": false }, { "bookingGroupId": "c3237384-e089-4cb7-b367-6e470ec2853c", "allowBooking": false }, { "bookingGroupId": "0fb72b0f-be13-4a62-86e3-ffb07ac9e619", "allowBooking": false }, { "bookingGroupId": "01fe5228-1df0-489e-80e6-f2f6caa33877", "allowBooking": false }, { "bookingGroupId": "6c5f4e9c-238b-4036-b918-388df46e87ce", "allowBooking": false }, { "bookingGroupId": "c47aa680-e361-4a9f-bb30-0555b901e28c", "allowBooking": false }, { "bookingGroupId": "53122fe4-c9f8-4b98-b02f-87c734c426af", "allowBooking": false }, { "bookingGroupId": "4c8e0f36-882b-4db3-abfd-b45bcd4ebba9", "allowBooking": false }, { "bookingGroupId": "58927b28-f6f5-47d5-a021-0a370617e1fc", "allowBooking": false }, { "bookingGroupId": "c70e06ec-360f-43b9-9a12-04ffa34f681a", "allowBooking": false }],
                    "name": "NUE",
                    "color": "#82C6DC",
                    "startDate": "2023-08-09T03:56:53",
                    "endDate": "2023-08-11T00:00:00",
                    "startTime": "00:30:00",
                    "endTime": "04:30:00",
                    "recurrence": 1,
                    "servicePointsSettingId": "2bc88bac-34b9-43b3-bfb3-d260fad6d941",
                    "occurrences": [{ "dayOfWeek": 3 }]
                }
            }
        );
        expect(_response.status()).toBe(200);
        expect(_response.ok()).toBeTruthy();
    });

})

test.describe("Schedules DELETE methods", () => {
    test('Verify that API deletes schedule by given id   ', async ({ request }) => {
        await test.step("delete schedules by id ", async () => {
            const response = await request.delete('/schedules/a539a08c-7270-45a6-835e-fda60a61ed6a');
            expect(response).toBeOK()
            console.log(await response.json())
        })
    })
})
