import { UserManager, UserManagerSettings, User, WebStorageStateStore } from "oidc-client"
import { action, observable } from "mobx"

const prodConfig: UserManagerSettings = {
    authority: "https://identity.badeev.info",
    client_id: "spa_badeev",
    redirect_uri: "https://badeev.info/auth-complete",
    response_type: "code",
    scope: "openid Portfolio.API",
    post_logout_redirect_uri: "https://badeev.info",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
}

const devConfig: UserManagerSettings = {
    authority: "https://identity.badeev.info",
    client_id: "spa_badeev",
    redirect_uri: "http://localhost:3000/auth-complete",
    response_type: "code",
    scope: "openid Portfolio.API",
    post_logout_redirect_uri: "https://badeev.info",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
}

const getConfig = () => {
    const hostname = window.location.hostname

    if (hostname === "localhost" || hostname === "127.0.0.1") {
        return devConfig
    }

    return prodConfig
}

const userManager = new UserManager(getConfig())

export default class AuthService {
    @observable user: User | null = null

    @action signin() {
        userManager.signinRedirect()
    }

    @action async signinComplete() {
        userManager.signinRedirectCallback().then((user) => {
            this.user = user
        })
    }

    @action loadUser() {
        userManager.getUser().then((user) => {
            console.log(user)

            this.user = user
        })
    }
}
