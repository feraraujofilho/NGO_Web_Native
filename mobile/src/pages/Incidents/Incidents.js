import React from "react"
import {View, Image, Text} from "react-native"

import logoImg from "../../assets/logo.png"
import styles from "./incidentsStyles"

export default function Incidents () {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                Total: <Text style={styles.headerTextBold}>0 Incidents</Text>
                </Text>
            </View>

            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.description}>Choose one of the incidents below to save the day</Text>

            <View style={styles.incidentList}>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>NGO: </Text>
                    <Text style={styles.incidentValue}>APAD </Text>

                    <Text style={styles.incidentProperty}>Incident: </Text>
                    <Text style={styles.incidentValue}>Cadelinha Atropelada </Text>

                    <Text style={styles.incidentProperty}>Value: </Text>
                    <Text style={styles.incidentValue}>$ 320 </Text>
                </View>
            </View>
        </View>
    )
}