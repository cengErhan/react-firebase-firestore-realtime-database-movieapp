import {collection} from 'firebase/firestore';
import { db } from './init-firebase';

export const moviesCollRef = collection(db, 'movies') 