export default class UserInfo {
    constructor({ nameSelector, descriptionSelector }) {
        this.name = document.querySelector(nameSelector);
        this.description = document.querySelector(descriptionSelector);
    }

    getUserInfo() {
        const userInfo = {
            name: this.name.textContent,
            description: this.description.textContent
        }
        return userInfo;
    }

    setUserInfo(data) {
        this.name.textContent = data.name;
        this.description.textContent = data.description
    }
}