import fs from 'fs'
import path from 'path'


let dir = "/home/glxalokesh/Documents/vs code/spotify-UI-clone-frontend-proj-6/songs" ;

let files = fs.readdirSync(dir);

console.log(files);

let paths =files.map(file => path.join(dir,file))

console.log(paths);

export const names = files

export const  pathsname = paths;    