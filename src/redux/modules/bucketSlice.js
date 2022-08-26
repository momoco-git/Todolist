import { createSlice } from '@reduxjs/toolkit';

const bucket = createSlice({
    name : "bucket",
    initialState:{
        list: [],
      },
    reducers :{
        loadBucket : (state,action)=>{
            state.list = action.payload
        },
        createBucket :(state,action)=>{
            state.list.push(action.payload)
        },
        updateBucket : (state,action)=>{
            const idx = state.list.findIndex(x=>{
                return x.id === parseInt(action.payload)
            })
            state.list[idx].Done =!state.list[idx].Done
        },
        deleteBucket : (state,action)=>{
            const idx = state.list.findIndex((x) => {
                return x.id === parseInt(action.payload)
              });
            state.list.splice(idx,1)
        },
    }
})

export const { loadBucket,createBucket,updateBucket,deleteBucket} = bucket.actions
export default bucket.reducer

// // import {
// //   collection,
// //   doc,
// //   getDoc,
// //   getDocs,
// //   addDoc,
// //   updateDoc,
// //   deleteDoc,
// // } from "firebase/firestore";
// // import { db } from "../../firebase";
// // import axios from'axios'
// // import {useDispatch} from"react-redux"

// // export const loadbucketAxios = ()=>{
// //   return async function(dispatch){
// //     const res = await axios.get("http://localhost:5001/bucket")
// //     dispatch(loadBucket(res.data))
// // }}

// //FB creator
// // export const loadBucketFB = () => {
// //     return async function (distpatch) {
// //       const bucket = await getDocs(collection(db, "bucket"));
// //       let bucket_list = [];
// //       bucket.forEach((x) => {
// //         bucket_list.push({ id: x.id, ...x.data() });
// //       });
// //       distpatch(loadBucket(bucket_list));
// //     };
// //   };
  
//   // export const createBucketFB = (bucket) => {
//   //   return async function (dispatch) {
//   //     const docRef = await addDoc(collection(db, "bucket"), bucket);
//   //     const _bucket = await getDoc(docRef);
//   //     const bucket_data = { id: docRef.id, ..._bucket.data() };
//   //     // const adasd = {id : docRef.id, ...bucket}
//   //     dispatch(createBucket(bucket_data));
//   //   };
//   // };
  
//   // export const updateBucketFB = (bucket) => {
//   //   return async function (dispatch, getState) {
//   //     const docRef = doc(db, "bucket", bucket);
//   //     const isDone = getState().bucket.list.filter((x) => {
//   //       return x.id === bucket;
//   //     })[0].Done;
//   //     console.log(isDone);
//   //     await updateDoc(docRef, { Done: !isDone });
//   //     dispatch(updateBucket(bucket));
//   //   };
//   // };
  
//   // export const deleteBucketFB = (bucket) => {
//   //   return async function (dispatch) {
//   //     const docRef = doc(db, "bucket", bucket);
//   //     await deleteDoc(docRef);
//   //     dispatch(deleteBucket(bucket));
//   //   };
//   // };