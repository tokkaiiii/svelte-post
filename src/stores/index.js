import {writable, get, derived} from "svelte/store";
import {getApi, putApi, postApi, delApi} from "../service/api.js";
import {router} from "tinro";

function setAuth() {
    let initValues = {
        id: '',
        email: '',
        userId: '',
        username: '',
        Authorization: ''
    }
    const {subscribe, set} = writable({...initValues})
    const refresh = async () => {
        try {
            const authenticationUser = await postApi({path: '/refresh'})
            set(authenticationUser)
            isRefresh.set(true)
        } catch (error) {
            auth.resetUserInfo()
            isRefresh.set(false)
        }
    }

    const resetUserInfo = () => set({...initValues})

    const login = async (email, password) => {
        try {
            const options = {
                path: '/login',
                data: {
                    email: email,
                    password: password
                }
            }
            const result = await postApi(options)
            set(result)
            isRefresh.set(true)
            router.goto('/home')
        } catch (error) {
            alert('로그인 오류')
        }
    }

    const logout = async () => {
        try{
            auth.resetUserInfo()
            isRefresh.set(false)
            router.goto('/home')
        }catch (error){
            console.log('로그아웃 에러')
        }
    }

    const register = async (
        email, username, password
    ) => {
        try{
            const options = {
                path:'/register',
                data:{
                    email:email,
                    username:username,
                    password:password
                }
            }
            await postApi(options)
            alert('회원가입 성공')
            router.goto('/login')
        }catch (error){
            console.log('회원가입 에러')
        }
    }

    return {
        refresh,
        resetUserInfo,
        login,
        logout,
        register
    }
}

export const auth = setAuth()
export const isRefresh = writable(false)