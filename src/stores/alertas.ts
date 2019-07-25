import { Module } from 'vuex';

const module: Module<any, any> = {
    namespaced: true,
    state: {
        snackbar: {
            message: '',
            color: '',
            timeout: 10000,
            show: false
        }
    },
    mutations: {
        mutationOpenSnackbar(state,payload) {
            state.snackbar.message = payload.message;
            state.snackbar.color = payload.color;
            state.snackbar.timeout = payload.timeout;
            state.snackbar.show = true;
        },
        mutationCloseSnackbar(state) {
            state.snackbar.show = false;
        }
    },
    actions: {
        showSnackbar(context, payload) {
            context.commit('mutationOpenSnackbar',payload);    
        },
        showSucessSnackbar(context, message) {
            context.commit('mutationOpenSnackbar',{message: message, color: 'success',timeout: 1000});    
        },
        showErrorSnackbar(context, message) {
            context.commit('mutationOpenSnackbar',{message: message, color: 'error',timeout: 3000});    
        },
        showWarningSnackbar(context, message) {
            context.commit('mutationOpenSnackbar',{message: message, color: 'warning',timeout: 5000});    
        },
        showInfoSnackbar(context, message) {
            context.commit('mutationOpenSnackbar',{message: message, color: 'info',timeout: 4000});    
        },
        closeSnackbar(context) {
            context.commit('mutationCloseSnackbar');    
        }
    }
}
export default module;