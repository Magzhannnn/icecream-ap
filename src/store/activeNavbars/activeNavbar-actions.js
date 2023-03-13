import { LOGIN_NAV, LOGOUT_NAV, START_NAV } from './activeNavbar-constants';

export const addLoginNav = dataAtribute => ({
	type: LOGIN_NAV,
	dataAtribute,
});

export const addLogoutNav = dataAtribute => ({
	type: LOGOUT_NAV,
	dataAtribute,
});

export const startNav = dataAtribute => ({
	type: START_NAV,
	dataAtribute,
});
