import Vue from "vue";
import Firebase from "@/plugins/firebase";

import { Rules } from "@/utils";
import { AppConstants } from "@/configs";

export default Vue.extend({
    data() {
        return {
            rules: Rules,
            form: {
                signin: { model: {} as any, loading: false, valid: false }
            }
        };
    },
    beforeMount(){
        if(this.$store.state.auth.signedin){
            this.$router.push('/gallery')
        }
    },
    methods: {
        async signIn() {
            let a = this;
            this.form.signin.loading = true;
            Firebase.auth()
                .signInWithEmailAndPassword(
                    this.form.signin.model["email"],
                    this.form.signin.model["password"]
                )
                .then(function (result) {
                    a.form.signin.loading = false;
                    if (result.user !== null) {
                        a.saveSession(result.user);
                    }
                })
                .catch(error => {
                    a.form.signin.loading = false;
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    var email = error.email;
                    var credential = error.credential;
                    console.log(error);
                });
        },
        async saveSession(user: Firebase.User) {
            let a = this;

            let u = {
                signedin: true,
                user: {
                    uid: user.uid,
                    fullname: user.displayName,
                    email: user.email,
                    dp: user.photoURL
                }
            };

            localStorage.setItem(
                AppConstants.localStorage_Session,
                btoa(JSON.stringify(u))
            );
            a.$store.commit("signinUser", u);
            a.$router.push("/gallery");
        }
    }
});