import { createSlice } from "@reduxjs/toolkit";
import { db } from "../config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Device = {
  id: string;
  devicetype: string;
  devicename: string;
  deviceip: string;
  devicestatus: string;
  deviceconnect: string;
  deviceservice: string;
};

type InitialState = {
  devicesArray: Device[];
};

const initialState: InitialState = {
  devicesArray: [],
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    fetchDevice: (state, action) => {
      state.devicesArray = action.payload;
    },
    addDevice: (state, action) => {
      state.devicesArray.push(action.payload);
    },
    updateDevice: (state, action) => {
      const {
        id,
        devicetype,
        devicename,
        deviceip,
        devicestatus,
        deviceconnect,
        deviceservice,
      } = action.payload;
      const deviceIndex = state.devicesArray.findIndex(
        (device) => device.id === id
      );
      if (deviceIndex !== -1) {
        state.devicesArray[deviceIndex] = {
          id: id,
          devicetype,
          devicename,
          deviceip,
          devicestatus,
          deviceconnect,
          deviceservice,
        };
      }
    },
  },
});

export const addDevice = createAsyncThunk("add-device", async (device: any) => {
  const addDeviceRef = await addDoc(collection(db, "devices"), device);
  const newDevice = { id: addDeviceRef.id, device };
  return newDevice;
});

export const fetchDevice = createAsyncThunk("view-device", async () => {
  const querySnapshot = await getDocs(collection(db, "devices"));
  const devices = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    device: doc.data(),
  }));
  return devices;
});

export const updateDevice = createAsyncThunk(
  "edit-device",
  async (editedDevice: any) => {
    const devices = await getDocs(collection(db, "devices"));
    for (var snap of devices.docs) {
      if (snap.id === editedDevice.id) {
        const deviceRef = doc(db, "devices", snap.id);
        await updateDoc(deviceRef, editedDevice.device);
      }
    }
    return editedDevice;
  }
);

export default deviceSlice.reducer;