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

// check that required fields are not blank
test('required fields are not blank', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users")

    const users = await response.json()

    for (const user of users){
        expect(user.name).toBeTruthy()
    }

})

//check that email field contain @ symbol 

test('required email field contain @ symbol ', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users")

    const users = await response.json()

    for (const user of users){
        expect(user.email).toContain('@')
    }

})