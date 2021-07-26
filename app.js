const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
	profileDataArr.forEach((prolifileItem) => console.log(prolifileItem));
};

printProfileData(profileDataArgs);
