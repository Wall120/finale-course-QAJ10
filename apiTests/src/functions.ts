import * as superagent from 'superagent';

export async function getPosts(url: string): Promise<any> {
    try {
        const res = await superagent.get(url)
        return res;
        }catch(errorMessage) {
            console.log(errorMessage); 
        };
    };

export async function getPostsId(id: number): Promise<any> {
    try {
        const res = await superagent.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        return res;
        }catch(errorMessage) {
            console.log(errorMessage); 
        };
    };

export async function createOperations(url: string, object: any): Promise<any> {
    try {
        const res = await superagent
            .post(url)
            .send(object);
            return res;
        }catch(errorMessage) {
            console.log(errorMessage);
            };
        };

export async function changeOperations(url: string, object: any): Promise<any> {
    try {
        const res = await superagent
            .put(url)
            .send(object);
            return res;
        }catch(errorMessage) {
            console.log(errorMessage);
            };
        };

export async function changePartOperations(url: string, object: any): Promise<any> {
    try {
        const res = await superagent
            .patch(url)
            .send(object);
            return res;
        }catch(errorMessage) {
            console.log(errorMessage);
            };
        };

export async function deleteOperation(url: string): Promise<any> {
    try {
        const res = await superagent.delete(url);
            return res;
        } catch(errorMessage) {
            console.log(errorMessage);
            };
        };


