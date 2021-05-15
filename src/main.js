import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'

const store = createStore({
    state(){
        return{
            user:{
                name:"sok",
                gender:'M',
                phone:"012334455",
                id:"user1"

            },
            posts:[
                {
                    title:"ABC",
                    content:"helllo this is my post",
                    postAt: new Date(),
                    postBy:"user1",
                    id:"post1",

                },
                {
                    title:"abc",
                    content:"helllo this is my another post",
                    postAt: new Date(),
                    postBy:"user1",
                    id:"post2"

                },
               
            ],
            comments:[
                {
                    content:"my comment",
                    commentAt: new Date(),
                    commentBy: "user1",
                    postId:"post1",
                    id:1
                },
                {
                    content:"my comment123",
                    commentAt: new Date(),
                    commentBy: "user1",
                    postId:"post1",
                    id:2
                }
            ]
        }
    },
    mutations:{

    },
    actions:{

    },
    getters:{
        getPost(state){
            return state.posts
        },
        getComment(state){
            return state.comments
        },
        getCommentOfPost: (state) => (postID)=>{
            return state.comments.filter(comment => comment.postID == postID)
        }
    }
})

const app = createApp(App)
app.use(store)
app.mount("#app")
