import { StyleSheet, View, Text, Button, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { handleSignOut } from '../services/authService'
import { auth, db } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'

function ProfileScreen() {

  //get User information
  const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {

          const userDoc = await getDoc(doc(db, "users", user.uid));

          if (userDoc.exists()) {
            setUser(userDoc.data());
            console.log("Admin status: ", userDoc.data());
          } else {
            console.log("No such document!");
            setUser(false);
          }

        } catch (error) {
          console.error("Error fetching user document: ", error);
        }
        
      } else {
        setUser(false)
        console.log("No user logged in...")
      }  
    })

    return unsubscribe;
  }, []);

  //Getting course data folr specific
  const [course, setCourse] = useState([]);

  useEffect(() => {
    if (user && user.name) {
      const getCourses = async () => {
        try {
  
          const collectionRef = collection(db, "results");
          
          const q = query(collectionRef, where("contestantname", "==", user.name));
  
          const querySnapshot = await getDocs(q);
          const courses = [];
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            courses.push(doc.data());
            console.log(doc.id, " => ", doc.data());
          });
          setCourse(courses);
  
        } catch (error) {
          console.error("Error fetching user document: ", error);
        }
    };

    getCourses();
    
  }

  }, [user])

// Logout
const handleSignout = () => {
  handleSignOut()
}

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Page</Text>
      <Image 
        style={styles.profimg} 
        source={require('../assets/avatar.png')}
      />
      <Image 
        style={styles.addimg} 
        source={require('../assets/add.png')}
      />
      <View style={styles.enterfield}>
        <Text style={styles.enter}>{user.name}</Text>
      </View>
      <View style={styles.enterfield}>
        <Text style={styles.enter}>{user.email}</Text>
      </View>
      <View style={styles.enterfield2}>
        <TextInput style={styles.enter}>{user.password}</TextInput>
        <Image 
          style={styles.editimg} 
          source={require('../assets/edit.png')}
        />
      </View>
      <Text style={styles.subhead}>Badges</Text>
      <View style={styles.badgebox}>
        <Image 
          style={styles.badgeimg} 
          source={require('../assets/emblem.png')}
        />
      </View>
      <Text style={styles.subhead}>Previous Results</Text>
      <View style={styles.contestant}>
        {
            course.length > 0 ? (
              course.map((results, index) => (
                <View style={styles.contestantbox} key={index}>
                  <Text style={styles.number}>{results.coursename}</Text>
                  <Text style={styles.number}>{results.time}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.number}>No courses found</Text>
            )
          }
      </View>
          
      <TouchableOpacity style={styles.btn} onPress={handleSignout}>
          <Text style={styles.btntext}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ProfileScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E79C"
  },
  title: {
    fontFamily:'PoetsenOne',
    fontSize: 55,
    fontWeight: '500',
    color: "#194D10",
    textAlign: 'center',
    marginTop: 37
  },
  profimg: {
    height: 210,
    width: 210,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 75
  },
  addimg: {
    height: 50,
    width: 53,
    marginTop: -66,
    marginLeft: 220,
    marginBottom: 20
  },
  enterfield: {
    marginBottom: 18,
  },
  enterfield2: {
    marginBottom: 18,
    flexDirection: 'row',
  },
  enter: {
    fontFamily:'Itim',
    backgroundColor: 'rgba(255, 191, 96, 0.3)',
    height: 50,
    fontSize: 31,
    padding: 3,
    paddingLeft: 20,
    marginLeft: 35,
    borderRadius: 10,
    width: '80%',
    color: '#00272E',
  },
  subhead: {
    fontFamily:'PoetsenOne',
    fontSize: 37,
    fontWeight: '500',
    color: "#A64510",
    textAlign: 'left',
    marginLeft: 35,
    marginTop: 10,
    marginBottom: 10
  },
  badgebox: {
    flexDirection: 'row',
    marginLeft: 35
  },
  badgeimg: {
    marginRight: 30,
  },
  editimg: {
    width: 32,
    height: 31,
    marginLeft: -40,
    marginTop: 8
  },
  contestant: {
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: 'rgba(27, 102, 107, 0.3)',
    marginBottom: 18,
    marginLeft: 35,
    marginRight: 35
  },
  contestantbox: {
    flexDirection: 'row',
  },
  number: {
    fontFamily:'Itim',
    fontSize: 29,
    fontWeight: '600',
    marginRight: 33,
    color: '#00272E'
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#263A38',
    width: 200,
    marginLeft: 85,
    padding: 6,
    borderRadius: 50,
    marginBottom: 30
  },
  btntext: {
    fontFamily:'PoetsenOne',
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFA948'
  },
})