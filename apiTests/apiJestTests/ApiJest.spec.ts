import { describe, expect, test } from '@jest/globals';
import * as superagent from 'superagent';
import {getPosts, getPostsId, createOperations, changeOperations, 
       changePartOperations, deleteOperation} from '../src/functions';
import {newUser, newComments, newPhotos, changeUser, changePost, changeComment, changePhoto,
       changeUserPart, changeCommentPart, changePartPhoto} from '../src/consts';

describe('GET api requests', () => {

    beforeAll(() => {
        console.log(`I've already run here`)
    });
    
    test('get posts list', async () => {
        const res = await getPosts('https://jsonplaceholder.typicode.com/posts');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeDefined();
    });

    test('get id post from listing', async () => {
       const res = await getPosts('https://jsonplaceholder.typicode.com/posts/6');
       expect(res.statusCode).toBe(200);
       expect(res.body.title).toContain('dolorem eum magni eos aperiam quia');
    });

    test('get incorrect id post from listing', async ()=> {
        await getPosts('https://jsonplaceholder.typicode.com/posts/101').catch((errorMessage) => {
            expect(errorMessage.status).toBe(404);
            expect(errorMessage.body).toHaveLength(0);
        });

    });

    test('get posts comments', async () => {
        const res = await getPosts('https://jsonplaceholder.typicode.com/posts/1/comments');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeDefined();
    });

    test('get postId comments', async () => {
        const id = 1;
        const res = await getPostsId(id);
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeDefined();
        expect(res.body.postId).toBe(1);
    });
    
});

describe('POST api requests', () => {

    test('create the user', async () => {
       const res = await createOperations('https://jsonplaceholder.typicode.com/users', newUser);
       expect(res.statusCode).toBe(201);
       expect(res.body.name).toEqual(newUser.name);
       expect(res.body.email).toEqual(newUser.email);
    });

    test('create the comments', async () => {
        const res = await createOperations('https://jsonplaceholder.typicode.com/comments', newComments);
        expect(res.statusCode).toBe(201);
        expect(res.body.email).toEqual(newComments.email);
        expect(res.body.body).toEqual(newComments.body)
    });

    test('create empty comments', async () => {
        const res = await superagent.post('https://jsonplaceholder.typicode.com/comments');
        expect(res.statusCode).toBe(201);
        expect(res.body).toBeDefined();
    });

    test('create comment with wrong path from post', async () => {
        await createOperations('https://jsonplaceholder.typicode.com/comments/1', newComments).catch((errorMessage) => {
        expect(errorMessage.status).toBe(404);
        expect(errorMessage.body).toHaveLength(0);
        });
    });

    test('create photo new photo', async () => {
        const res = await createOperations('https://jsonplaceholder.typicode.com/photos', newPhotos);
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toEqual(newPhotos.title);
        expect(res.body.url).toEqual(newPhotos.url);
    });
});

describe('PUT api requests', () => {

    test('full change user info', async () => {
       const res = await changeOperations('https://jsonplaceholder.typicode.com/users/10', changeUser);
       expect(res.statusCode).toBe(200);
       expect(res.body.username).toEqual(changeUser.username);
       expect(res.body.email).toEqual(changeUser.email);
    });

    test('change undefind id user', async () => {
        await changeOperations('https://jsonplaceholder.typicode.com/users?id=12', changeUser).catch((errorMessage) => {
        expect(errorMessage.status).toBe(404);
        expect(errorMessage.body).toHaveLength(0);
        });
    });

    test('full change the created post', async () => {
       const res = await changeOperations('https://jsonplaceholder.typicode.com/posts/7', changePost);
       expect(res.statusCode).toBe(200);
       expect(res.body.title).toEqual(changePost.title);
       expect(res.body.body).toHaveLength(0);
    });

    test('full change the created comment', async () => {
        const res = await changeOperations('https://jsonplaceholder.typicode.com/comments/81', changeComment);
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toEqual(changeComment.name);
        expect(res.body.postId).toEqual(changeComment.postId);
    });

    test('full change the created photo', async () => {
       const res = await changeOperations('https://jsonplaceholder.typicode.com/photos/8', changePhoto);
       expect(res.statusCode).toBe(200);
       expect(res.body.title).toEqual(changePhoto.title);
       expect(res.body.url).toEqual(changePhoto.url);
    });

    afterAll(() => {
        console.log(`I'm here`)
    });
});

describe('PATCH api requests', () => {

    test('change part info from user', async () => {
       const res = await changePartOperations('https://jsonplaceholder.typicode.com/users/4', changeUserPart);
       expect(res.statusCode).toBe(200);
       expect(res.body.name).toEqual(changeUserPart.name);
       expect(res.body.phone).toHaveLength(0);
    });

    test('change part info post comment with wrong path', async () => {
       await changePartOperations('https://jsonplaceholder.typicode.com/posts/1/comments?id=4', changeComment).catch((errorMessage) => {
        expect(errorMessage.status).toBe(404);
        expect(errorMessage.body).toHaveLength(0);
       });
    });

    test('change part info in comment', async () => {
       const res = await changePartOperations('https://jsonplaceholder.typicode.com/comments/4', changeCommentPart);
       expect(res.statusCode).toBe(200);
       expect(res.body.name).toEqual(changeCommentPart.name);
       expect(res.body.body).toEqual(changeCommentPart.body);
    });

    test('change part info in photo', async () => {
       const res = await changePartOperations('https://jsonplaceholder.typicode.com/photos/9', changePartPhoto);
       expect(res.statusCode).toBe(200);
       expect(res.body.url).toEqual(changePartPhoto.url);
       expect(res.body.id).toEqual(9);
    });
});

describe('DELETE api requests', () => {

    test('delete user', async () => {
       const res = await deleteOperation('https://jsonplaceholder.typicode.com/users/2');
       expect(res.statusCode).toBe(200);
       expect(res.body).toBeDefined();
    });

    test('delet created user', async () => {
        const res = await deleteOperation('https://jsonplaceholder.typicode.com/users/11');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeDefined();
    });
});