import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-provider-env";
import dotenv from "dotenv";

dotenv.config();

// console.log("AWS_REGION:", process.env.AWS_REGION);
// console.log("AWS_ACCESS_KEY_ID:", process.env.AWS_ACCESS_KEY_ID);
// console.log("AWS_SECRET_ACCESS_KEY:", process.env.AWS_SECRET_ACCESS_KEY);

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: fromEnv(),
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

export default upload;
