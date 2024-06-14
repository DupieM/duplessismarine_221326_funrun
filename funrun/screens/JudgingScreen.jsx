import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { createNewTime } from '../services/DbService';

function JudgingScreen({ navigation, route }) {

  //Retrive the params from the contestant screen
  const { contestantName, courseName } = route.params;

  //creating variables for input fields
  const [coursename, setCourseName] = useState('');
  const [contestantname, setContestantName] = useState('');
  const [time, setTime] = useState('')

  const [isFormValid, setIsFormValid] = useState(false);
    useEffect(() => {
        // Check if all required fields are filled
        if (time.trim()) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [time]);

  //Creating the time entry per contestant and coirse
  const handleCreation = async () => {

    //Make sure all the values have been entered - show error/disable button
    if (!isFormValid) {
      Alert.alert("Validation Error", "Please fill all the required fields.");
      return;
  }

    // 
    var times = {time, contestantName, courseName, timestopwatch}
    var success = await createNewTime(times)
    if(success){
      Alert.alert("Success", "You have finished judging this contestant");
      navigation.goBack();
    } else {
        //Validation why
        Alert.alert("Error", "Failed to create time entry");
    }
  };

  // STOPWATCH FUNCTIONALITY
  // State and refs to manage time and stopwatch status 
  const [timestopwatch, setTimeStopWatch] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  // Function to start the stopwatch
  const startStopwatch = () => { 
    startTimeRef.current = Date.now() - timestopwatch * 20; 
    intervalRef.current = setInterval(() => { 
      setTimeStopWatch(Math.floor((Date.now() -  
      startTimeRef.current) / 20)); 
    }, 20); 
    setRunning(true); 
  };

  // Function to pause the stopwatch
  const pauseStopwatch = () => { 
    clearInterval(intervalRef.current); 
    setRunning(false); 
  }; 

  // Function to reset the stopwatch 
  const resetStopwatch = () => { 
    clearInterval(intervalRef.current); 
    setTimeStopWatch(0); 
    setRunning(false); 
  };

  // Function to resume the stopwatch
  const resumeStopwatch = () => { 
    startTimeRef.current = Date.now() - timestopwatch * 20; 
    intervalRef.current = setInterval(() => { 
      setTimeStopWatch(Math.floor( 
      (Date.now() - startTimeRef.current) / 20)); 
    }, 20); 
    setRunning(true); 
  }; 


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Judging</Text>
      <View style={styles.enterfield}>
        <Text style={styles.enter}>
          {contestantName}
        </Text>
      </View>
      <View style={styles.enterfield}>
        <Text style={styles.enter}>
          {courseName}
        </Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.enter2}>Life Timer</Text>
        <Text style={styles.timeText}>{timestopwatch}s</Text>
        <View style={styles.buttonContainer}>
          {running ? (
            <TouchableOpacity 
              style={[styles.button, styles.pauseButton]} 
              onPress={pauseStopwatch} 
            > 
              <Text style={styles.buttonText}>Pause</Text> 
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity 
                style={[styles.button, styles.startButton]} 
                onPress={startStopwatch} 
              > 
                <Text style={styles.buttonText}>Start</Text> 
              </TouchableOpacity> 
              <TouchableOpacity 
                style={[styles.button, styles.resetButton]} 
                onPress={resetStopwatch} 
              > 
                <Text style={styles.buttonText}> 
                  Reset 
                </Text> 
              </TouchableOpacity>
            </>
          )}
          {!running && ( 
            <TouchableOpacity 
              style={[styles.button, styles.resumeButton]} 
              onPress={resumeStopwatch} 
            > 
              <Text style={styles.buttonText}> 
                Resume 
              </Text> 
            </TouchableOpacity> 
          )}
        </View>
        <TouchableOpacity style={styles.Btn} onPress={handleCreation}>
          <Text style={styles.Btntext}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>OR</Text>
      <View style={styles.box2}>
        <Text style={styles.enter2}>Stopwatch Timer</Text>
        <TextInput
          style={styles.enter3}
          placeholder='00:00:00'
          keyboardType='numeric'
          onChangeText={newText => setTime(newText)}
        />
        <TouchableOpacity style={styles.Btn}  onPress={handleCreation}>
          <Text style={styles.Btntext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default JudgingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E79C"
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: "#194D10",
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  enterfield: {
    marginBottom: 18,
  },
  enter: {
    backgroundColor: 'rgba(255, 191, 96, 0.3)',
    height: 50,
    fontSize: 32,
    padding: 2,
    paddingLeft: 20,
    marginLeft: 35,
    borderRadius: 10,
    width: '80%',
    color: '#00272E',
  },
  enter2: {
    height: 60,
    fontSize: 32,
    padding: 8,
    marginLeft: 10,
    borderRadius: 10,
    color: '#FFA948',
  },
  box1: {
    height: 250,
    width: '80%',
    backgroundColor: 'rgba(25, 77, 16, 0.8)',
    marginLeft: 35,
    borderRadius: 20,
    marginTop: 10
  },
  box2: {
    height: 230,
    width: '80%',
    backgroundColor: 'rgba(25, 77, 16, 0.8)',
    marginLeft: 35,
    borderRadius: 20,
    marginBottom: 30
  },
  subtitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#1B666B",
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8
  },
  Btn: {
    backgroundColor: '#263A38',
    width: 140,
    marginLeft: 135,
    padding: 6,
    borderRadius: 50,
    marginBottom: 25
  },
  Btntext: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFA948'
  },
  enter3 : {
    backgroundColor: 'rgba(255, 191, 96, 0.3)',
    width: '90%',
    textAlign: 'center',
    padding: 0,
    fontSize: 60,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 17
  },
  timeText: { 
    fontSize: 48, 
  }, 
  buttonContainer: { 
    flexDirection: 'row', 
    marginTop: 20, 
  }, 
  button: { 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
  }, 
  startButton: { 
    backgroundColor: '#2ecc71', 
    marginRight: 10, 
  }, 
  resetButton: { 
    backgroundColor: '#e74c3c', 
    marginRight: 10, 
  }, 
  pauseButton: { 
    backgroundColor: '#f39c12', 
  }, 
  resumeButton: { 
    backgroundColor: '#3498db', 
  }, 
  buttonText: { 
    color: 'white', 
    fontSize: 16, 
  }, 
})