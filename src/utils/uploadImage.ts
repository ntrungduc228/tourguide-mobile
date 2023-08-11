import storage from '@react-native-firebase/storage';

export const uploadImage = async (imageUri: string) => {
  if (!imageUri) {
    return null;
  }
  try {
    const reference = storage().ref('tour/' + new Date().getTime() + '.jpg');
    console.log('ooo');
    // const response = await fetch(imageUri);
    // const blob = await response.blob();

    // await reference.put(blob);
    await reference.putFile(imageUri);
    const url = await reference.getDownloadURL();
    console.log(url);
    return url;
  } catch (error) {
    console.log(error);
  }
};
