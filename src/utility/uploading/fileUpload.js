import AWS from "aws-sdk";
import api from "../../api/api";

const getS3Client = function({
  AccessKeyId,
  SecretAccessKey,
  SessionToken,
  Region,
}) {
  const s3 = new AWS.S3({
    accessKeyId: AccessKeyId,
    secretAccessKey: SecretAccessKey,
    sessionToken: SessionToken,
    region: Region,
  });

  return s3;
};

export const generateFilename = function(
  name,
  category,
  random_chars_from_server
) {
  // generates a unique filename based on a given file name
  const nameSplit = name.split(" ");
  const newName = nameSplit.join("_");
  const dot_index = newName.lastIndexOf(".");
  const ext = newName.substring(dot_index + 1);
  let filename = newName.substring(0, dot_index);
  filename = `${category}/${filename}_${random_chars_from_server}.${ext}`;

  return filename;
};

export const s3Upload = function(file, filename, credentials) {
  const CacheControl = "max-age=31536000";

  const params = {
    Bucket: credentials.Bucket,
    Key: filename,
    Body: file,
    CacheControl,
    ContentType: file.type,
  };
  const s3 = getS3Client(credentials);

  // upload to s3
  return s3.upload(params).promise();
};

const fileUpload = function(
  newFile,
  category,
  credentials,
  successCallback,
  errorCallback,
  finallyCallback
) {
  const file = newFile.file;
  const filename = generateFilename(
    file.name,
    category,
    credentials.Randomchar
  );

  // upload to s3
  s3Upload(file, filename, credentials)
    .then((data) => {
      newFile.file = data.Key;

      // save to server
      api
        .post("/api/files/add", newFile)
        .then((res) => {
          successCallback();
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      errorCallback(err);
    })
    .finally(() => {
      finallyCallback();
    });
};

export const hrDocUpload = function(
  newFile,
  credentials,
  successCallback,
  errorCallback,
  finallyCallback
) {
  fileUpload(
    newFile,
    "hr-docs",
    credentials,
    successCallback,
    errorCallback,
    finallyCallback
  );
};

export const toolBoxTalksUpload = function(
  newFile,
  credentials,
  successCallback,
  errorCallback,
  finallyCallback
) {
  fileUpload(
    newFile,
    "toolbox-talks",
    credentials,
    successCallback,
    errorCallback,
    finallyCallback
  );
};

export const multipleFilesUpload = async function(
  files,
  category,
  credentials,
  successCallback,
  errorCallback,
  finallyCallback
) {
  // let filesUploaded = [];
  // let errors = [];
  let uploadPromises = [];
  files.forEach(async (file, key) => {
    const randomChar = `${credentials.Randomchar}_${key}`;
    const filename = generateFilename(file.name, category, randomChar);
    uploadPromises.push(
      new Promise(async (resolve, reject) => {
        await s3Upload(file, filename, credentials)
          .then((data) => {
            resolve(data.Key);
          })
          .catch((err) => {
            reject(err);
          });
      })
    );
  });

  return new Promise(async (resolve, reject) => {
    Promise.all(uploadPromises).then(async (values) => {
      resolve(values);
    });
  });
};

// export const multipleFilesUpload = async function(files, category, credentials) {
//   return new Promise( async (resolve, reject) => {
//     let filesUploaded = [];
//     let errors = [];
//     let uploadPromises = [];
//     Array.from(files).forEach( async (file, key) => {
//       const randomChar = `${credentials.Randomchar}_${key}`;
//       const filename = generateFilename(file.name, category, randomChar);

//       s3Upload(file, filename, credentials, function(err, data) {
//         resolve
//       })
//         .then((data) => {
//           filesUploaded.push(data.Key)
//         })
//         .catch((err) => {
//           errors.push(err)
//         })
//     });

//     resolve({
//       filesUploaded,
//       errors
//     })
//   })
// };
