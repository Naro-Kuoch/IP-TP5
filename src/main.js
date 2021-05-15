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
                    content:"helllo this is my another post "+
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
                },
                {
                    content:"my comment123",
                    commentAt: new Date(),
                    commentBy: "user1",
                    postId:"post2",
                    id:1
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
        getCommentsByPost: (state) => (postId) => {
            return state.comments.filter(comment => comment.postId == postId)
        }
    }
})

const app = createApp(App)
app.use(store)
app.mount("#app")
