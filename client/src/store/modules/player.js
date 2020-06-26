import axios from 'axios';

const state = {
	data: {},
	error: {},
	loading: true
};

const getters = {
	getData: (state) => state
};

const actions = {
	async fetchPlayerData({ commit }, nickname) {
		state.loading = true;
		try {
			const response = await axios.get(`http://localhost/api/profile/${nickname}`);
			commit('setData', response.data);
			state.loading = false;
		} catch (error) {
			commit('setError', error.response.data.error);
			this.loading = false;
		}
	}
};

const mutations = {
	setData: (state, data) => (state.data = data),
	setError: (state, error) => (state.error = error)
};

export default {
	state,
	getters,
	actions,
	mutations
};
