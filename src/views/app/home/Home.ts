import Vue from 'vue'

import Firebase from "@/plugins/firebase";
import { AppConstants } from '@/configs';

export default Vue.extend({
    data() {
        return {
            post: {
                recent: [] as unknown,
                old: [] as unknown
            },
            loading:{
                gettingposts : true
            }
        };
    },
    methods: {
        async getPosts() {
            Firebase.firestore().collection(AppConstants.fcoll_post_hdr).orderBy("createddt","desc").get().then(docs => {
                this.loading.gettingposts = false;
                if (!docs.empty) {
                    let recent_post = [];
                    let older_post = [];

                    for (let index = 0; index < docs.docs.length; index++) {
                        const element = docs.docs[index];

                        let d = element.data();

                        d["id"] = element.id;

                        if (index >= 3) older_post.push(d);
                        else recent_post.push(d);
                    }
                    this.post.old = older_post;
                    this.post.recent = recent_post;
                } else {
                    alert("No Posts !!!");
                }
            }).catch(err => {
                console.log(err);
                this.loading.gettingposts = false;
            });
        }
    },
    mounted() {
        this.getPosts();
    }
})