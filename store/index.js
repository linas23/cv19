export const state = () => ({
    info: null
})

export const getters = {
    info: state => state.info
}

export const mutations = {
    setInfo(state, payload) {
        state.info = payload;
    }
}

export const actions = {
    async getGlobal({ commit }) {
        let { confirmed, deaths, recovered } = await this.$axios.$get("https://covid19.mathdro.id/api");
        commit('setInfo', { confirmed, deaths, recovered })
    },
    async handleCountryChange({ commit }, country) {
        console.log(country)
        let { confirmed, deaths, recovered } = await this.$axios.$get(
            `https://covid19.mathdro.id/api/countries/${country}`
        );
        commit('setInfo', { confirmed, deaths, recovered })
    },

}