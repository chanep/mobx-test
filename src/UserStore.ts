import { observable, flow, action } from 'mobx'
import User from './User';
import ApiClient from './ApiClient'

export class UserStore{
    // @observable
    // users: User[] = [];
    
    @observable
    status: string = "pending";

    @action
    getAll(){
        this.status = "done";
    }

    // getAll = flow(function*(this: UserStore) {
    //     console.log('xxx');
    //     // <- note the star, this a generator function!
    //     this.users = []

    //     const api = new ApiClient();
    //     this.users = (yield api.getUsers()) as User[];
    //     this.status = "done";
    //     console.log(this.users.length);
    // });
    
}