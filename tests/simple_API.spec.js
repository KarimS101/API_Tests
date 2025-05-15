// @ts-check
import { test, expect } from '@playwright/test';
import { request } from 'http';

test('GET/simple 200 test', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users")

    //Check the status code is 200
    expect(response.status()).toBe(200)

})

    test('GET/Get 10 users in response', async ({ request }) => {
        const response = await request.get("https://jsonplaceholder.typicode.com/users")

        const users = await response.json()

    //Check the response length for the endpoint is 10
    expect(users.length).toBe(10)



})

//NEGATIVE SCENARIO
test('GET/Get 404 when searching for 999 users in response', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users/999")

    //Check the status code is 200
    expect(response.status()).toBe(404)

})

// check that required fields are not blank
test('GET/required fields are not blank', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users")

    const users = await response.json()

    for (const user of users){
        expect(user.name).toBeTruthy()
    }

})

//check that email field contain @ symbol 
test('GET/required email field contain @ symbol ', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users")

    const users = await response.json()

    for (const user of users){
        expect(user.email).toContain('@')
    }

})

//Check the response body contains all expected fields 
test('GET/validate required field appear on json response', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users")

    const users = await response.json()

    const user = users[0]

    expect(user).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        username: expect.any(String),
        email: expect.any(String), 
        address: expect.objectContaining({
            street: expect.any(String), 
            city: expect.any(String)
        }),
        company: expect.objectContaining({
            name: expect.any(String) 
    })

})
})

//Check specific user 
test('GET/User Id 1 ', async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users/1")

    const users = await response.json()

    expect(users.id).toBe(1)
    expect(users.name).toBe('Leanne Graham')

})
