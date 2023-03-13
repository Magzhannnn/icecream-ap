import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	addLoginNav,
	addLogoutNav,
	startNav,
} from '../../store/activeNavbars/activeNavbar-actions';
import { selectActiveNav } from '../../store/activeNavbars/activeNavbar-selectors';
import { logOut } from '../../store/login/login-actions';
import { selectIsValidUserLogin } from '../../store/login/login-selectors';
import { addBuyModal } from '../../store/modal/modal-actions';
import { newProducts } from '../../store/ourProducts/ourProduct-actions';
import ButtonApp from '../Button/ButtonApp/ButtonApp';
import Container from '../Container/Container';
import styles from './Navbar.module.css';

const Navbar = () => {
	const [isLoad, setIsLoad] = useState(false);

	const dispatch = useDispatch();
	const isLoginVal = useSelector(selectIsValidUserLogin);
	const activeNavItem = useSelector(selectActiveNav);

	const activeNavLoginHandler = e => {
		const dataAtribute = e.target.dataset.nav;
		console.log(dataAtribute);
		dispatch(addLoginNav(dataAtribute));

		setIsLoad(!isLoad);
	};

	console.log(isLoginVal);
	console.log(activeNavItem);

	const activeNavLogoutHandler = e => {
		const dataAtribute = e.target.dataset.nav;
		console.log(dataAtribute);
		dispatch(addLogoutNav(dataAtribute));

		setIsLoad(!isLoad);
	};

	const logOutHandler = () => {
		dispatch(newProducts);
		dispatch(logOut);
		dispatch(addLogoutNav('Login'));
	};

	useEffect(() => {
		dispatch(addLogoutNav('Login'));
	}, []);

	return (
		<Container className={styles.navbar}>
			<div className={styles.navbarIcon}></div>
			<div className={styles.navItems}>
				{isLoginVal === 1 && (
					<>
						<Link
							to='/home'
							className={
								activeNavItem.activeNav.validName === 'Home'
									? `${activeNavItem.activeNav.item}`
									: activeNavItem.Home
							}
							onClick={activeNavLoginHandler}
							data-nav='Home'
						>
							Home
						</Link>
						<Link
							to='/info'
							className={
								activeNavItem.activeNav.validName === 'Info'
									? `${activeNavItem.activeNav.item}`
									: activeNavItem.Info
							}
							onClick={activeNavLoginHandler}
							data-nav='Info'
						>
							Info
						</Link>
						<Link
							to='/products'
							className={
								activeNavItem.activeNav.validName === 'Products'
									? `${activeNavItem.activeNav.item}`
									: activeNavItem.Products
							}
							onClick={activeNavLoginHandler}
							data-nav='Products'
						>
							Products
						</Link>
						<Link
							to='/contact'
							className={
								activeNavItem.activeNav.validName === 'Contact'
									? `${activeNavItem.activeNav.item}`
									: activeNavItem.Contact
							}
							onClick={activeNavLoginHandler}
							data-nav='Contact'
						>
							Contact Us
						</Link>
						<div className={styles['navItem__logout']} onClick={logOutHandler}>
							logOut
						</div>
					</>
				)}
				{(isLoginVal === 0 || isLoginVal === -1) && (
					<>
						<Link
							to='/login'
							className={
								activeNavItem.activeNav.validName === 'Login'
									? `${activeNavItem.activeNav.item}`
									: activeNavItem.Login
							}
							onClick={activeNavLogoutHandler}
							data-nav='Login'
						>
							LogIn
						</Link>
						<Link
							to='/reg'
							className={
								activeNavItem.activeNav.validName === 'Registration'
									? `${activeNavItem.activeNav.item}`
									: activeNavItem.Registration
							}
							onClick={activeNavLogoutHandler}
							data-nav='Registration'
						>
							Registration
						</Link>
					</>
				)}
			</div>
			{isLoginVal === 1 && (
				<ButtonApp
					title='Buy Now'
					onClick={() => dispatch(addBuyModal('Buy Now'))}
				/>
			)}
		</Container>
	);
};

export default Navbar;
