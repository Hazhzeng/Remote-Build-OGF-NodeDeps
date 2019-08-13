import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import * as _ from "lodash";

// Sample Request: https://functionapp.azurewebsites.net/api/HttpTrigger?busySeconds=3

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.res = {
        status: 200,
        mimetype: "text/plain",
        body: String(_.random(0, 99))
    }
};

export default httpTrigger;
