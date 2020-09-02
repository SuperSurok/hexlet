import fs from 'fs';
import os from 'os';
import path from 'path';
import write from "../4_asynchronous_return/practice/asynchronous_return";

test('readFile', (done) => {
    const data = 'example';
    const fileName = 'test';
    const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);
    const filePath = path.join(tmpDir, fileName);
    write(filePath, data, (err) => {
        if (err) {
            done.fail(err);
            return;
        }
        const content = fs.readFileSync(filePath, 'utf-8');
        expect(content).toEqual(data);
        done();
    })
})
