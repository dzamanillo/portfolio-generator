const { rejects } = require("assert");
const fs = require("fs");

const writeFile = (fileContent) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./dist/index.html", fileContent, (err) => {
			// if there's an error, reject the Promise and send error to .catch
			if (err) {
				reject(err);
				return;
			}

			// if everything went well, resolve the Promise and send the success data to .then
			resolve({
				ok: true,
				message: "File Created!",
			});
		});
	});
};

const copyFile = () => {
	return new Promise((resolve, reject) => {
		fs.copyFile("./src/style.css", "./utils/style.css", (err) => {
			if (err) {
				reject(err);
				return;
			}

			resolve({
				ok: true,
				message: "File Copied!",
			});
		});
	});
};

module.exports = { writeFile, copyFile };
