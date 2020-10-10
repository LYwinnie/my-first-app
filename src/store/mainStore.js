import {observable, action} from 'mobx';
class MainStore{
    @observable isShow = false;
    @action onShow = () => {
        this.isShow = true;
    }
}

export default new MainStore(); 