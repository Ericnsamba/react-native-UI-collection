import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Platform, Dimensions, Pressable } from 'react-native';
import * as Theme from '../theme/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from 'react-native-firebase';
// import {
// 	GoogleSignin,
// 	GoogleSigninButton,
// 	statusCodes,
// } from '@react-native-community/google-signin';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';


const { width, height } = Dimensions.get('window');

export default class Login extends Component {
	constructor(props: Readonly<{}>) {
		super(props);
		this.state = {
			secureTextEntry: true,
			email: '',
			profileImage: '',
			password: '',
			errorMessage: null,
			isLoading: false,
			userInfo: {},
		};
	}

	componentDidMount = () => {
		GoogleSignin.configure({
			webClientId: 'com.googleusercontent.apps.675159236451-krjh5rjo8mmv86oli88d9v7pr945mihj', // client ID of type WEB for your server (needed to verify user ID and offline access)
		});
	}

	signIn = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			this.setState({ userInfo });
			// creating credentials
			const credentials = firebase.auth.GoogleAuthProvider.credential(
				userInfo.idToken,
				userInfo.accessToken,
			);

			if (userInfo) {
				const { name, email, photo } = this.state.userInfo.user;
				return firebase
					.auth()
					.signInWithCredential(credentials)
					.then(user => {
						const fbRootRef = firebase.firestore();
						// const userID = user.uid;
						const userID = firebase.auth().currentUser.uid;
						console.log(' ====> fbRootRef', fbRootRef);
						console.log(' =====> userID:', userID);
						const userRef = fbRootRef
							.collection('users')
							.doc(userID);
						userRef.set({
							email: email,
							username: name,
							profileImage: photo.replace('s120', 's300', true),
						});
					});
			}
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
			} else if (error.code === statusCodes.IN_PROGRESS) {
				// operation (f.e. sign in) is in progress already
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				// play services not available or outdated
			} else {
				// some other error happened
			}
		}
	};

	render() {
		const imageLink = { uri: "https://images.unsplash.com/photo-1577854807863-e13e704c97c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" }
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					
					<Text style={styles.welcomeText}>Dashboard</Text>
					<Text style={styles.subHeader}>For ordinary people</Text>

					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button}
							onPress={this.signIn}>
							<Ionicons name="logo-google" size={30} color={Theme.colors.black} />
							<Text style={styles.buttonText}>Sign In With Google </Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button}
							onPress={() => this.props.navigation.navigate('Onboarding',)}>
							<Ionicons name="logo-facebook" size={30} color={Theme.colors.black} />
							<Text style={styles.buttonText}>Sign In With Facebook</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button}
							onPress={() => this.props.navigation.navigate('Onboarding',)}>
							<Ionicons name="logo-apple" size={30} color={Theme.colors.black} />
							<Text style={styles.buttonText}>Sign In With Apple</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button}
							onPress={() => this.props.navigation.navigate('Profile',)}>
							<Ionicons name="ios-mail" size={30} color={Theme.colors.black} />
							<Text style={styles.buttonText}>Sign In With Email</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.signTextContainer}>
						<Text style={styles.signText}>Already have an account ?</Text>
						<Text style={styles.signTextLink}>Sign in</Text>
					</View>

				</View>
				<View style={styles.footer}>
					<View style={styles.innerFooter}>
						<Text style={styles.termsText}>
							By creating an account, I accept App’s {' '}
						</Text>
						<Text style={styles.termsTextLink}>
							Terms of Service.
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	header: {
		flex: Platform.OS === 'ios' ? 4 : 4,
		borderBottomRightRadius: 60,
		overflow: 'hidden',
		backgroundColor: Theme.colors.blue100,
		justifyContent: 'center',
	},
	bgImage: {
		flex: 1,
		width: width,

	},
	welcomeText: {
		textAlign: 'center',
		fontSize: 34,
		marginVertical: 10,
		color: Theme.colors.white,
		fontWeight: '900',
		alignSelf: 'center',
		top: 80,
		borderBottomWidth: 1,
		borderBottomColor: 'white',
	},
	subHeader: {
		fontSize: 26,
		textAlign: 'center',
		// marginVertical: 10,
		color: Theme.colors.white,
		fontWeight: '700',
		alignSelf: 'center',
		top: 70,
		borderBottomColor: 'white',
	},
	headerTopText: {
		color: Theme.colors.white,
		position: 'absolute',
		zIndex: 99,
		alignSelf: 'center',
	},
	headingText: {
		textAlign: 'center',
		fontSize: 24,
		marginVertical: 20,
		color: Theme.colors.blue100,
	},

	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		top: 40
	},
	button: {
		width: width - 80,
		height: 60,
		borderRadius: 30,
		backgroundColor: Theme.colors.blue20,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginBottom: 20,
	},
	buttonText: {
		color: Theme.colors.black,
		textAlign: 'center',
		fontSize: 16,
		paddingLeft: 20
	},
	text: {
		textAlign: 'center',
		fontSize: 16,
		marginBottom: 20,
		color: Theme.colors.blue100,

	},
	footer: {
		flex: 1,
		backgroundColor: Theme.colors.blue100,
		justifyContent: 'center',

	},
	innerFooter: {
		flex: 1,
		backgroundColor: Theme.colors.white,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 60,


	},
	signTextContainer: {
		justifyContent: 'center',
		alignSelf: 'center',
		marginVertical: 40,
		flexDirection: 'row'
	},
	signText: {
		fontWeight: 'normal',
		fontSize: 16,
		color: Theme.colors.white,
	},
	signTextLink: {
		fontWeight: '700',
		marginHorizontal: 10,
		fontSize: 16,
		color: Theme.colors.green,

	},
	termsText: {
		fontWeight: 'normal',
		fontSize: 10,
	},
	termsTextLink: {
		fontWeight: 'normal',
		fontSize: 10,
		paddingVertical: 6,
		textDecorationLine: "underline"
	}

});
