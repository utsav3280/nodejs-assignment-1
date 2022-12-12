const {myFileWriter, myFileUpdater, myFileReader, myFileDeleter} = require("./index.js")

myFileWriter("file.txt", "Hello");
myFileReader("file.txt");
myFileUpdater("file.txt", " World");
myFileDeleter("file.txt");
myFileUpdater("file.txt", " From NodeJS");
myFileReader("file.txt");
