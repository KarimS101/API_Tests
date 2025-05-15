// @ts-check
import { test, expect } from '@playwright/test';
import { request } from 'http';

test('simple 200 test', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users")

    //Check the status code is 200
    expect(response.status()).toBe(200)

})

    test('Get 10 users in response', async ({ request }) => {
        const response = await request.get("https://jsonplaceholder.typicode.com/users")

        const users = await response.json()

    //Check the response length for the endpoint is 10
    expect(users.length).toBe(10)



})

//NEGATIVE SCENARIO
test('Get 404 when searching for 999 users in response', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users/999")

    //Check the status code is 200
    expect(response.status()).toBe(404)

})