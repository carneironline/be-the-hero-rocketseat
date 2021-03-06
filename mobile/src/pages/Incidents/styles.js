import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        marginBottom: 16,
        marginTop: 48,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    titleText: {
        color: '#13131a',
        fontWeight: 'bold',
        fontSize: 30,
    },

    reload: {
        position: 'relative',
        top: 3,
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        fontSize: 15,
        color: '#737380',
        marginTop: 8,
        marginBottom: 24,
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#e02041',
    },
})
