import { observable, action, reaction } from 'mobx'
import Product from './Product';

export default class ProductStore{
    @observable
    product?: Product;

    @observable
    private searchTerm: String = "";

    @action
    search(term: String){
        this.searchTerm = term;
    }

    disposeReaction = reaction(
        () => this.searchTerm,
        term => console.log("reaction searchTerm: " + term), {delay: 5000, fireImmediately: true}
    )
}