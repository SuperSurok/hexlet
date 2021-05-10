import { promises as fs } from "fs";

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
export const exchange = async (file1, file2) => {
  const dataFile1 = await fs.readFile(file1, "utf-8");
  const dataFile2 = await fs.readFile(file2, "utf-8");
  const [data1, data2] = await Promise.all([dataFile1, dataFile2]);
  await fs.writeFile(file1, data2);
  await fs.writeFile(file2, data1);
};

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
export const exchangeMaster = async (filepath1, filepath2) => {
  const reading1 = fs.readFile(filepath1);
  const reading2 = fs.readFile(filepath2);
  const [data1, data2] = await Promise.all([reading1, reading2]);
  const writing1 = fs.writeFile(filepath1, data2);
  const writing2 = fs.writeFile(filepath2, data1);
  await Promise.all([writing1, writing2]);
};
