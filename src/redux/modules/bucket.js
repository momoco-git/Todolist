import { async } from "@firebase/util";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";
const initialState = {
  list: [],
};

// Action Creators
export function loadBucket(BucketList) {
  return { type: LOAD, BucketList };
}

export function createBucket(bucket) {
  return { type: CREATE, bucket };
}
export function updateBucket(datas) {
  return { type: UPDATE, datas };
}
export function deleteBucket(bucket) {
  return { type: DELETE, bucket };
}

//FB creator
export const loadBucketFB = () => {
  return async function (distpatch) {
    const bucket = await getDocs(collection(db, "bucket"));
    let bucket_list = [];
    bucket.forEach((x) => {
      bucket_list.push({ id: x.id, ...x.data() });
    });
    distpatch(loadBucket(bucket_list));
  };
};

export const createBucketFB = (bucket) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "bucket"), bucket);
    const _bucket = await getDoc(docRef);
    const bucket_data = { id: docRef.id, ..._bucket.data() };
    // const adasd = {id docRef, ...bucket}
    dispatch(createBucket(bucket_data));
  };
};

export const updateBucketFB = (bucket) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "bucket", bucket);
    const isDone = getState().bucket.list.filter((x) => {
      return x.id === bucket;
    })[0].Done;
    console.log(isDone);
    await updateDoc(docRef, { Done: !isDone });
    dispatch(updateBucket(bucket));
  };
};

export const deleteBucketFB = (bucket) => {
  return async function (dispatch) {
    const docRef = doc(db, "bucket", bucket);
    await deleteDoc(docRef);
    dispatch(deleteBucket(bucket));
  };
};

// Reducer
export default function reducer(data = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD": {
      return { list: action.BucketList };
    }

    case "bucket/CREATE": {
      const new_bucket_list = [...data.list, action.bucket];
      return { list: new_bucket_list };
    }
    case "bucket/UPDATE": {
      const isDone = data.list.filter((x) => {
        return x.id === action.datas;
      })[0].Done;
      const new_bucket_list = data.list.map((x) => {
        if (action.datas === x.id) {
          return { ...x, Done: !isDone };
        } else {
          return x;
        }
      });

      return { list: new_bucket_list };
    }
    case "bucket/DELETE": {
      const new_list = data.list.filter((x) => {
        return action.bucket !== x.id;
      });
      return { list: new_list };
    }

    default:
      return data;
  }
}
