import { observable, action, computed } from 'mobx'

class Store {
    @observable likesCount = 7

    @observable messages = ["Team", "Everything"]

    @action updateCount() {
        this.likesCount++;
    }

    @action postMessage(message) {
        this.messages.push(message)
    }

    @computed get messageCount(){
        return this.messages.length;
    }

}

const storeInstance = new Store()

export default storeInstance;