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

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    fs.writeFile(
      path + fileName + '.' + fileExtension,
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

    return path + fileName + '.' + fileExtension;
  }
}
