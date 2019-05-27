const {Storage} = require('@google-cloud/storage');
const async = require('async')

const storage = new Storage();
const bucketName = 'aba-animals';

async function getBucketFiles(storage, bucketName) {
  const [files] = await storage.bucket(bucketName).getFiles();

  return files.map(file => {
    const fileName = file.name
    const uri = file.metadata.selfLink

    return {fileName: fileName, uri: uri}
  });
}

async function getBuckets(storage) {
  const [buckets] = await storage.getBuckets();

  return buckets.map((bucket) => {
    return bucket.metadata.id
  })
}

export default async function getAllFiles(storage) {
  const buckets = await getBuckets(storage)

  const imageFiles = buckets.map(async (bucket) => {
    const imageURIs = await getBucketFiles(storage, bucket)

    return { category: bucket, files: imageURIs }
  })

  return await Promise.all(imageFiles)
}

// NOTES: usage example
// (async () => {
//   const result = await (getAllFiles(storage))
//   result.forEach((category) => {
//     console.dir(category)
//   })
// })()

