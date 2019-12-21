import Vue from 'vue'
import { VueEditor } from "vue2-editor";

import Firebase from '@/plugins/firebase'
import { AppConstants } from '@/configs'

export default Vue.extend({
    data() {
        return {
            model: {
                addpopup: false,
                editor: '',
                meta: {},
                bannerimage: null as unknown as File
            }
        };
    },
    components: { VueEditor },

    methods: {
        savePost() {

            let a = this;

            var input: any = document.getElementById('post_title');
            let meta: any = this.model.meta;

            if (input !== null) meta.title = input.value;

            if (this.model.bannerimage) {
                Firebase.storage().ref(AppConstants.fstor_post_banner).child(Date.now().toString()).put(a.model.bannerimage).then(d => {
                    d.ref.getDownloadURL().then(url => {
                        meta.bannerimage = url;
                        addPost();
                    })
                }).catch(err => {
                    alert("Unable to update banner image");
                });
            } else {
                addPost();
            }

            function addPost() {
                Firebase.firestore().collection(AppConstants.fcoll_post_hdr).add(
                    {
                        ...meta, ...{
                            createddt: new Date(),
                            updateddt: new Date(),
                            active: true
                        }
                    }
                ).then((data) => {
                    Firebase.firestore().collection(AppConstants.fcoll_post_dtl).add({
                        id: data.id,
                        content: a.model.editor
                    }).then(doc => {
                        a.$router.push('/gallery');
                    }).catch(err => {
                        // alert("Failed. Please contact support");
                    });
                }).catch((err) => {
                    console.log(err);
                    // alert('Unable to save post');
                });
            }
        },
        pickBanner(e?: any) {
            var input = document.getElementById('banner');
            if (input !== null) {
                if ('files' in e.srcElement) {
                    this.model.bannerimage = e.srcElement.files[0];
                    let banner_pos = document.getElementById('banner_pos');
                    if (banner_pos != null) banner_pos.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(140, 190, 255, 0.3)), url('${window.URL.createObjectURL(e.srcElement.files[0])}')`
                } else input.click();
            }
        }
    },
    mounted() {
        let a = this;

        var input = document.getElementById('banner');
        if (input !== null) input.addEventListener('change', this.pickBanner);
    }
})