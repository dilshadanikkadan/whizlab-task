import { Application } from "express";
import { config } from "../_boot/config";

export default async (app: Application) => {
    app.listen(config.http.port, () => {
        console.log('786........✨✨✨');
        console.log(`⚡ whiteLab backe end is listening at ${config.http.port}`);
    })
}