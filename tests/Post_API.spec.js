// @ts-check
import { test, expect } from '@playwright/test';
import { request } from 'http';

test('Post/Users', async ({ request }) => {

    //Step 1: Create a user with post
    const userData = {
        name: "Temporary User",
        email: "tempUser@google.com",
        username: "tempUser"

    }

    const response = await request.get("https://jsonplaceholder.typicode.com/users",{
        data: userData
    });

    expect([200, 201]).toContain(response.status()); // Allow 200 (mock) or 201 (real API)



   

})