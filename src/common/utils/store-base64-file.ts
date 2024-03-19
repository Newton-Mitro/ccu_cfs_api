import { HttpException, HttpStatus } from '@nestjs/common';

const fs = require('fs');

export class StoreBase64File {
  static store(
    storagePath: string,
    fileName: string,
    fileExtension: string,
    base64Document: string,
  ) {
    const path = `./uploads/${storagePath}/`;
    const file_name = fileName.toLowerCase().replace(/\s/g, '_');

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    fs.writeFile(
      path + file_name + '.' + fileExtension,
      base64Document,
      { encoding: 'base64' },
      function (err) {
        if (err) {
          throw new HttpException(
            'Error while saving file.',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      },
    );

    return (
      process.env.APP_URL + storagePath + '/' + file_name + '.' + fileExtension
    );
  }
}
