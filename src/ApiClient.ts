import User from "./User";

export default class ApiClient{
    async getUsers(): Promise<User[]>{
        return Promise.resolve([
            {name: "pepe", dni: 123},
            {name: "juan", dni: 567}
        ]);
    }
}