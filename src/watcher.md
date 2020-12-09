```
import fs from "fs";
import events from 'events'

<!-- 监听watchDir下文件，如果文件发生变化，文件名和内容等，就触发process事件 -->
export default class Watcher extends events.EventEmitter{
    private watchDir:string;
    constructor(watchDir:string){
        super();
        this.watchDir = watchDir;
    }

    watch(){
        fs.readdir(this.watchDir,(err,files)=>{
            if(err) throw err;
            for(let file of files){
                this.emit("process",file);
            }
        })
    }

    start(){
        fs.watchFile(this.watchDir,()=>{
            this.watch();
        })
    }
}
<!-- 验证文件监听器 -->
const watcher = new Watcher('./src/watch');
watcher.on('process',(file:string)=>{
    const watchFile = `./src/watch/${file}`;
    const processedFile = `./src/done/${file.toLowerCase()}`;
    <!-- 监听目录的文件会被迁移到process目录下 -->
    fs.rename(watchFile, processedFile, err => {
        if (err) throw err;
    });
})
watcher.start();
```