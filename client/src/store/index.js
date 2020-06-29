import Vue from 'vue';
import Vuex from 'vuex';
import player from './modules/player';
import teamList from './modules/teamList';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		player,
		teamList
	}
});
