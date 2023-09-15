import { test } from "@playwright/test";
import { expect } from "@playwright/test";

test.describe('bookings GET methods', () => {
 
    test('Verify that API can return bookings settings', async ({request}) => {
            
         const response = await request.get('/bookingSettings')
         expect(response).toBeOK()
         console.log(await response.json())


    })

    test('Verify that API can return bookings group by id ', async ({request}) => {
            
        const response = await request.get('/bookingGroups/c70e06ec-360f-43b9-9a12-04ffa34f681a')
        expect(response).toBeOK()
        console.log(await response.json())
   })


})

test.describe('bookings page PUT methods', () => {
    test('Verify that API canput new booking group details', async ({request}) => {
               
            const response = await request.put('/bookingGroups/c70e06ec-360f-43b9-9a12-04ffa34f681a', {
                data : {
                    name: 'tudor bking group',
                    color: '#82c7dc',
                    isDefault: false,
                    isPublic: false,
                    daysInAdvance: 8,
                    time: '09:35:00',
                    rate: { id: '1c57a921-74a0-40aa-8d22-dcc87adc9e9f', name: 'Public rate' },
                    customerGroup: null,
                    allowSplitPayment: false,
                    unpaidBookingAction: null,
                    cutoffUnpaidBooking: null,
                    maxConcurrentBookings: null,
                    maxConcurrentlyBookedHours: null,
                    maxHoursPerDay: null,
                    maxHoursPerMonth: null,
                    bookingSettingsId: '7cf3c7e7-aaba-4944-9a54-a10bf956e1a0'
                }
            })
    
    })

})


test.describe('bookings page POST methods', () => { 
   test('Verify that APi can post new bookings group', async({request}) => {
        const response = await request.post('/bookingGroups', {
            data : {
                name: 'tudor bkdd group',
                color: '#8247dc',
                isDefault: false,
                isPublic: true,
                daysInAdvance: 3,
                time: '09:35:00',
                rate: { id: '1c57a921-74a0-40aa-8d22-dcc87adc9e9f', name: 'Public rate' },
                customerGroup: null,
                allowSplitPayment: false,
                unpaidBookingAction: null,
                cutoffUnpaidBooking: null,
                maxConcurrentBookings: null,
                maxConcurrentlyBookedHours: null,
                maxHoursPerDay: 10,
                maxHoursPerMonth: 23,
                bookingSettingsId: '7cf3c7e7-aaba-4944-9a54-a10bf956e1a0'
            }
        }) 
      

   })
})
test.describe('bookings page DELETE methods', () => { 
//     test('Verify that API can delete booking group by id ', async ({request}) => {
            
//         const response = await request.delete('/bookingGroups/2253b623-12cd-4f0a-bf62-09d0556f7c34')
//         expect(response).toBeOK()
      
//    })
 })