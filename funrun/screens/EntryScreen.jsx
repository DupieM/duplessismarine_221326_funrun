import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNewEntry } from '../services/DbService';

function EntryScreen({ route, navigation }) {

  //Retrive the params from the competition screen
  const { courseName, courseDescription } = route.params;

  //creating the entry
  const [course_name, setCourse_Name] = useState('')
  const [con_name, setCon_Name] = useState('')
  const [skill_level, setSkill_Level] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
      // Check if all required fields are filled
      if (course_name.trim() && con_name.trim() && skill_level.trim() && age.trim() && height.trim()) {
          setIsFormValid(true);
      } else {
          setIsFormValid(false);
      }
  }, [course_name, con_name, skill_level, age, height]);

  const handleCreation = async () => {
    //Need to pass all our data to the function

    //Make sure all the values have been entered - show error/disable button
    if (!isFormValid) {
        Alert.alert("Validation Error", "Please fill all the required fields.");
        return;
    }

    var entries = {course_name, con_name, skill_level, age, height}
    var success = await createNewEntry(entries)
    if(success){
      Alert.alert("Success", "You have entered the comopetition successfully");
      navigation.goBack()
    } else {
        //Validation why
        Alert.alert("Error", "Failed to create bucket list item.");
    }

}

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}
      
      >{JSON.stringify(courseName)}</Text>
      <View style={styles.infobox}>
        <Text style={styles.subhead}>
          {JSON.stringify(courseDescription)} 
        </Text>
      </View>
      <Text style={styles.subtitle}>Enter Competition</Text>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter} placeholder='Re-Enter Course Name' placeholderTextColor="#00272E"
          onChangeText={newText => setCourse_Name(newText)}
          defaultValue={course_name}
        />
      </View>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter} placeholder='Enter Name' placeholderTextColor="#00272E"
          onChangeText={newText => setCon_Name(newText)}
          defaultValue={con_name}
        />
      </View>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter} placeholder='Enter Skill Level' placeholderTextColor="#00272E"
          onChangeText={newText => setSkill_Level(newText)}
          defaultValue={skill_level}
        />
        <Text style={styles.subtext}>(Novice/Intermediate/Expert)</Text>
      </View>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter2} placeholder='Age' keyboardType='numeric' placeholderTextColor="#00272E"
          onChangeText={newText => setAge(newText)}
          defaultValue={age}
        />
      </View>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter2} placeholder='Height' placeholderTextColor="#00272E"
          onChangeText={newText => setHeight(newText)}
          defaultValue={height}
        />
      </View>
      <TouchableOpacity style={styles.Btn} onPress={handleCreation}>
          <Text style={styles.Btntext}>Enter</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default EntryScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E79C"
  },
  title: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 50,
    fontWeight: 'bold',
    color: "#194D10",
    textAlign: 'center'
  },
  infobox: {
    backgroundColor: "rgba(122, 153, 102, 0.4)",
    height: 167,
    width: 300,
    padding: 10,
    marginLeft: 30,
  },
  subhead: {
    fontSize: 22,
    color: "#A64510",
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: '400',
    color: "#00272E",
    textAlign: 'center'
  },
  enterfield: {
    marginBottom: 18
  },
  enter: {
    backgroundColor: 'rgba(255, 191, 96, 0.7)',
    height: 60,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 10,
    marginLeft: 35,
    borderRadius: 30,
    width: '80%',
    color: '#00272E',
  },
  subtext: {
    fontSize: 16,
    marginTop: 6,
    marginLeft: 35
  },
  enter2: {
    backgroundColor: 'rgba(255, 191, 96, 0.7)',
    height: 60,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 10,
    marginLeft: 35,
    borderRadius: 30,
    width: '25%',
    color: '#00272E',
  },
  Btn: {
    backgroundColor: '#263A38',
    width: 200,
    marginLeft: 85,
    padding: 6,
    borderRadius: 50,
    marginBottom: 25
  },
  Btntext: {
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    color: '#FFA948'
  },
})