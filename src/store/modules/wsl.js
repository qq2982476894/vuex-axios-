import api from '../../api/index'
const state = {
    users: [{
        name: 'wangsilong',
        id: 1
    }, {
        name: 'xiaoxin',
        id: 2
    }, {
        name: 'dachui',
        id: 3
        }],
    obj: null,
    inputValue: '',
    returnValue:''
}
const getters = {
    // getUserId(state) {
    //     return state.users.filter(item => item.id == 1);
    // }
    
     getUserId:(state) =>(id) =>{
         return state.users.find(item => item.id == id);
    }
}
const mutations = {
    send(state,payload) {
        state.inputValue = payload
        console.log(`SEND--------------`+state.inputValue,payload)
    },
    getText(state,payload) {
        state.returnValue = payload
        console.log(`GETTEXT--------------`+state.returnValue,payload)

    }
}
const actions = {
   async getData({commit,state},text) {
        commit('send', text)
        const data = await api.getData(state.inputValue);
        commit('getText', data.text)
        console.log('----------返回的data--------------', data)
    }
}   
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}