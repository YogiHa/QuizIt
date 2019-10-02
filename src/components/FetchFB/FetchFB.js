import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadFB } from '../../store/actions/quizActions';
import firebase from '../../config/FBConfig';

export default function FetchFB() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data) {
      dispatch(loadFB(data));
    }
  }, [data]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('quizzes')
      .onSnapshot(sanpshot => {
        const FBData = sanpshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(FBData);
      });
    return () => unsubscribe();
  }, []);
  return null;
}
