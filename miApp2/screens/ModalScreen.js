import React, {useState,iuseREF,useMemo,useCallback}from 'react';
import { View } from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { View,Text, Modal, TextInput,Pressable,StyleSheet,StatusBar,FlatList } from 'react-native';
import BottonSheet, {BottonSheetView} from '@gorhom/botton-sheet'



export default function ModalScreen(){

const [modalVisible,setModalVisible ]= useState(false);
const[task, setTask] = useState('');
const [taskItems, setTaskItems] = useState([]);
const[priority, setPriority] = useState('Media');

const bottomSheetRef = useRef(null);
const nextTaskId = useRef(0);
const snapPoints = useMemo(() => ['35%','55%'],[]);


const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
}, []);
const saveTask = () => {
    const taskName = () => task.trim();
    if (taskName() === '') {
        return;

    }

    setTask((currentTasks) => [
        ...concurrentTasks,
        { id: nextTaskId.current++,
          name: taskName,
          priority
        }

    ]);
    setTask('');
    setModalVisible(false);
};

const selectPriority = (selectedPriority) => {
    setPriority(selectedPriority);
    bottomSheetRef.current?.close();
}
return (
<GestureHandlerRootView style={styles.root}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.container}>
      
            <Text style={styles.Titulo}>Agregar tus Tareas</Text>
            <Text style={styles.subtitle}>Crea una nueva tarea</Text>

            <Pressable style={styles.primarybutton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>+Nueva Tarea</Text>
            </Pressable>

            <Pressable style={styles.secundarybutton} onPress={openBottomSheet}>
                <Text style={styles.buttonText}>Seleccionar Prioridad</Text>
            </Pressable>
            <FlatList style={styles.taskList}
            contentContainerStyle={styles.taskListContent}
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => (
                <View style={styles.taskCard}>
                    <Text style={styles.cardTitle}>Tarea:{index + 1}</Text>
                    <Text style={styles.taskText}>Nombre: {item.name}</Text>
                    <Text style={styles.priorityText}>Prioridad: {item.priority}</Text>
                </View>
            )}
            />
            <Modal visible={modalVisible} animationType="slide" 
            transparent onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>Nueva Tarea</Text>
                        <Text style={styles.description}>Ingresa el nombre de la Actividad</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ej.Estudiar React Native"
                            value={task}
                            onChangeText={setTask}
                        />
                        <Pressable style={styles.primaryButton} onPress={saveTask}>
                            <Text style={styles.buttonText}>Guardar Tarea</Text>
                        </Pressable>
                        <Pressable style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelText}>Cancelar</Text>
                        </Pressable>
                    </View>
                </Modal>
                <BottonSheet 
                 ref={bottomSheetRef}
                 index={-1} 
                 snapPoints={snapPoints}
                 enablePanDownToClose={true}
                 Background={styles.sheetBackground}
                 ></BottonSheet>


     <BottonSheetView style={styles.sheeContent}></BottonSheetView>



    </View>
</GestureHandlerRootView>
);
}


    