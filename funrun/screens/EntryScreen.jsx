import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNewEntry, getMyCourseList } from '../services/DbService';
import {Picker} from '@react-native-picker/picker'; //a lot of other cool pickers available rather than this one
import { Dropdown } from 'react-native-element-dropdown';


function EntryScreen({ route, navigation }) {

  //Retrive the params from the competition screen
  const { courseName, courseDescription } = route.params;

  //creating the entries
  const [course_name, setCourse_Name] = useState("")
  const [con_name, setCon_Name] = useState("")
  const [skill_level, setSkill_Level] = useState("")
  const [age, setAge] = useState("")
  const [height, setHeight] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")

  const [isFormValid, setIsFormValid] = useState(false);
  const handleCreation = async () => {
    //create new entry for the specific course

    var entry = {
      con_name: con_name,
      skill_level: skill_level,
      age: age,
      height: height,
    }

    //call my firebase function
    var success = await createNewEntry(selectedCourse, entry) //true or false based on the tryCatch

    if(success){
      Alert.alert("Success", "You have entered the competition successfully");
      navigation.goBack();
    } else {
        //Validation why
        Alert.alert("Error", "Failed to create bucket list item.");
    }

  }

  useEffect(() => {
    handleGettingcourses()
  }, [])

  //get al my courses name
  const [courses, setCourses] = useState([]);

    const handleGettingcourses = async () => {
        var coursesdata = await getMyCourseList();
        setCourses(coursesdata);
    }

  // data for the dropdown box
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: 'Novice', value: 'Novice' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Expert', value: 'Expert' }
  ]

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{courseName}</Text>
      <View style={styles.infobox}>
        <Text style={styles.subhead}>
          {courseDescription} 
        </Text>
      </View>
      <Text style={styles.subtitle}>Enter Competition</Text>
      <View style={styles.enterfield}>
        <Picker
            style={styles.enter}
            selectedValue={selectedCourse}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedCourse(itemValue)
            }>
                {/* Update to data from db */}
                {courses != [] ? (
                    courses.map((course) => (
                        <Picker.Item key={course.id} label={course.name} value={course.id} />
                    ))
                ) : null }    
        </Picker>
      </View>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter} placeholder='Enter Name' placeholderTextColor="#00272E"
          onChangeText={newText => setCon_Name(newText)}
          defaultValue={null}
        />
      </View>
      <View style={styles.enterfield}>
        <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder='Choose Skill Level'
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
              setSkill_Level(item.value);
            }}
          />
      </View>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter2} placeholder='Age' keyboardType='numeric' placeholderTextColor="#00272E"
          onChangeText={newText => setAge(newText)}
          defaultValue={null}
        />
      </View>
      <View style={styles.enterfield}>
        <TextInput style={styles.enter2} placeholder='Height' placeholderTextColor="#00272E"
          onChangeText={newText => setHeight(newText)}
          defaultValue={null}
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