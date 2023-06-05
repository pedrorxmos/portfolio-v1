import { collection, doc } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData, useFirestoreDocData } from 'reactfire';

export const useCollection = (col) => {
	const e = collection(useFirestore(), col);
	const { data } = useFirestoreCollectionData(e);

	return data;
};

export const useDoc = (col, d) => {
	const e = doc(useFirestore(), col, d);
	const { data } = useFirestoreDocData(e);

	return data;
};
