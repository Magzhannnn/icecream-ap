import React from 'react';
import { LOGIN_NAV, LOGOUT_NAV, START_NAV } from './activeNavbar-constants';
import styles from '../../UI/Navbar/Navbar.module.css';
import { upperCaseWord } from '../../helpers/upperCaseWord';

const activeNavLogInArr = {
	Home: styles['navItem__home'],
	Info: styles['navItem__info'],
	Products: styles['navItem__products'],
	Contact: styles['navItem__contact'],
};
const activeNavLogOutArr = {
	Login: styles['navItem__login'],
	Registration: styles['navItem__registration'],
};

const initialState = {
	...activeNavLogInArr,
	...activeNavLogOutArr,
	activeNav: {
		item: `${styles['navItem__login']} ${styles.active}`,
		validName: 'Login',
	},
};

export const navbarsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGOUT_NAV: {
			for (const activeNav in activeNavLogOutArr) {
				const name = upperCaseWord(activeNavLogOutArr[activeNav]);

				if (activeNav === action.dataAtribute) {
					return {
						...activeNavLogOutArr,
						activeNav: {
							item: `${activeNavLogOutArr[activeNav]} ${styles.active}`,
							validName: name,
						},
					};
				}
			}
			return state;
		}
		case LOGIN_NAV: {
			for (const activeNav in activeNavLogInArr) {
				const name = upperCaseWord(activeNavLogInArr[activeNav]);

				if (activeNav === action.dataAtribute) {
					return {
						...activeNavLogInArr,
						activeNav: {
							item: `${activeNavLogInArr[activeNav]} ${styles.active}`,
							validName: name,
						},
					};
				}
			}
			return state;
		}
		default: {
			return state;
		}
	}
};
