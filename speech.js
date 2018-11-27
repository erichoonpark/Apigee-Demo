const speech = require('@google-cloud/speech');

const transcribeAudio = function(event) {
    return Promise.resolve()
        .then(() => {
            const audioFilename = "gs://" + file.bucket + '/' + event.data.name;
            const request = {
                "config": {
                    "enableWordTimeOffsets": true, 
                    "languageCode": "en-US",
                    "encoding":"FLAC"
                }, 
                "audio": {
                    "uri": audioFilename
                }
            }
            return makeSpeechRequest(request);
        }).then((transcription) => {
            console.log('result: ', JSON.stringify(transcription));
            // TODO: write transcriptions to local file
        }).then((tempFile) => {

            // TODO: upload local transcription file to Cloud Storage

        }).catch((err) => {
            return Promise.reject(err);
        });
}