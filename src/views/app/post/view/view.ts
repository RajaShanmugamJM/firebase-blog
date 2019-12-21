import Vue from 'vue'
import Firebase from '@/plugins/firebase';
import { AppConstants } from '@/configs';

export default Vue.extend({
    data() {
        return {
            post: {},
            loading: {
                gettingposts: true
            }
        }
    },
    beforeMount() {
        this.getPost();
    },
    methods: {
        async getPost() {
            Firebase.firestore().collection(AppConstants.fcoll_post_hdr).doc(this.$route.params.id).get().then(doc => {
                Firebase.firestore().collection(AppConstants.fcoll_post_dtl).where("id", "==", this.$route.params.id.toString()).get().then((docs => {

                    this.loading.gettingposts = false;

                    if (docs.empty) {
                        console.log("Empty");
                    } else {

                        let d = doc.data();

                        if (d !== undefined && d["bannerimage"] !== undefined) {
                            let banner_pos = document.getElementById('banner_pos');
                            if (banner_pos != null) banner_pos.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(140, 190, 255, 0.3)), url('${d["bannerimage"]}')`
                        }

                        this.post = {
                            ...doc.data(),
                            ...docs.docs[0].data()
                        };
                    }
                })).catch(err => {
                    this.loading.gettingposts = false;

                });
            }).catch(err => {
                this.loading.gettingposts = false;

                console.log("Err");
                console.log(err);
            });
        }
    }
})