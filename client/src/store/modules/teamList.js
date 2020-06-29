import axios from 'axios';

const state = {
	data: [],
	error: {},
	loading: true
};

const getters = {
	getTeamList: (state) => state
};

const actions = {
	async fetchTeamMember({ commit }, id) {
		try {
			const response = await axios.get(`http://localhost/api/nsgt/${id}`);
			commit('setTeamMember', response.data);
		} catch (error) {
			commit('setError', error.response.data.error);
		}
	}
};

const mutations = {
	setTeamMember: (state, data) => state.data.push(data),
	setTeamListError: (state, error) => (state.error = error)
};

export default {
	state,
	getters,
	actions,
	mutations
};
